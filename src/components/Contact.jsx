import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const Contact = () => {
  const { x, y } = useMousePosition();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title" style={{ translate: `${x * 10}px ${y * 10}px` }}>Get In Touch</h2>
        <p className="subtitle" style={{ translate: `${x * 5}px ${y * 5}px` }}>Let's discuss opportunities and collaborate on exciting projects</p>
        
        <div 
          className="contact-card"
          style={{ translate: `${x * -15}px ${y * -15}px` }}
        >
          <h3>Contact Support</h3>
          <div className="contact-options">
            <a href="mailto:mandvigupta35@gmail.com" className="contact-btn">
                <div className="icon-box">@</div>
                <span>Email</span>
            </a>
            <a href="https://github.com/Mandvisah" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <div className="icon-box">Gh</div>
                <span>GitHub</span>
            </a>
             <a href="https://www.linkedin.com/in/mandvi-gupta-96ab98280/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <div className="icon-box">in</div>
                <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
