import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="subtitle">Let's discuss opportunities and collaborate on exciting projects</p>
        
        <div className="contact-card">
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
