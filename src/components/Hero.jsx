import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h3>Hy! I Am</h3>
          <h1>Mandvi</h1>
          <p>I create beautifully simple things, and I love what I do. Full Stack Developer & Computer Science Student.</p>
          
          <div className="hero-buttons">
            <a href="https://docs.google.com/document/d/1XTzWkr1bTNtR_pnFXabV5vziVvi8cZfSBCrn487FqQE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          {/* Note: Ensure profile.jpg is in src/assets/ */}
          <img src={profileImg} alt="Mandvi" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
