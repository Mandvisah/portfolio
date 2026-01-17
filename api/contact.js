import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER.replace(/\s+/g, ''),
                    pass: process.env.EMAIL_PASS.replace(/\s+/g, '')
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Sending to yourself
                replyTo: email, // So you can reply to the user
                subject: `Contact form submission from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email: ' + error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
