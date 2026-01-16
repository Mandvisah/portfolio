import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass set:", process.env.EMAIL_PASS ? "Yes" : "No");
if (process.env.EMAIL_PASS) {
    console.log("Email Pass length:", process.env.EMAIL_PASS.length);
}

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER.replace(/\s+/g, ''),
        pass: process.env.EMAIL_PASS.replace(/\s+/g, '')
    }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Server connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Transporter Error:", error);
        res.status(500).json({ error: error.message || error.toString() });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please stop other processes running on this port.`);
    } else {
        console.error("Server failed to start:", err);
    }
});
