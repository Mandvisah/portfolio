# Mandvi's Portfolio

A professional, high-performance personal portfolio website designed to showcase my skills as a Full Stack Developer. Built with modern web technologies to demonstrate clean code, responsive design, and interactive user experiences.

##  Features

- **Modern UI/UX**: clean, minimal dark-themed interface with **Glassmorphism** effects.
- ** Fast Performance**: Powered by **Vite** for instant server start and lightning-fast HMR.
- ** Fully Responsive**: Mobile-first design using **Tailwind CSS**, working perfectly on all devices.
- ** Smooth Animations**: Custom \RevealOnScroll\ animations and interactive hover effects.
- ** Functional Contact Form**: Integrated with **EmailJS** for real-time email delivery directly to your inbox.
- ** Resume Download**: Direct access to download/view the CV.

##  Tech Stack

- **Frontend**: [React.js](https://react.dev/) (v19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

##  Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository**
    \\\ash
    git clone https://github.com/Mandvisah/portfolio.git
    cd portfolio
    \\\

2.  **Install Dependencies**
    \\\ash
    npm install
    \\\

3.  **Configure Environment Variables**
    This project uses EmailJS for the contact form. You need to create a \.env\ file in the root directory:
    
    \\\ash
    # Create a new file named .env
    # (Do not commit this file)
    \\\

    Add your EmailJS credentials to it:
    \\\env
    VITE_SERVICE_ID=your_service_id
    VITE_TEMPLATE_ID=your_template_id
    VITE_PUBLIC_KEY=your_public_key
    \\\

4.  **Run Development Server**
    \\\ash
    npm run dev
    \\\
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

##  Project Structure

\\\ash
portfolio/
 public/              # Static assets (Resume, Favicon)
 src/
    assets/          # Images and media
    components/      # Reusable UI components (Hero, Navbar, etc.)
    App.jsx          # Main application component
    main.jsx         # Entry point
    index.css        # Global styles & Tailwind directives
 .env                 # Environment variables (not committed)
 index.html           # HTML entry point
\\\

##  Contact

**Mandvi Gupta**  
- **LinkedIn**: [Mandvi Gupta](https://www.linkedin.com/in/mandvi-gupta-96ab98280/)  
- **GitHub**: [Mandvisah](https://github.com/Mandvisah)  

---
* 2026 Mandvi. All rights reserved.*
