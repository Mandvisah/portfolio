import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-socials">
             <a href="https://github.com/Mandvisah" target="_blank" rel="noopener noreferrer">GitHub</a>
             <a href="https://www.linkedin.com/in/mandvi-gupta-96ab98280/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Mandvi. All rights reserved.</p>
        <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem'}}>Full Stack Developer & Computer Science Student</p>
      </div>
    </footer>
  );
};

export default Footer;
