import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import useMousePosition from '../hooks/useMousePosition';

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const mousePos = useMousePosition();

  const roles = ["Full Stack Developer", "CS Student", "Frontend Enthusiast", "Problem Solver"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting && text === roles[loopNum % roles.length] ? 1000 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="hero">
      {/* Floating Cartoon Icons */}
      <div className="floating-icon icon-1" style={{ translate: `${mousePos.x * -20}px ${mousePos.y * -20}px` }}>💻</div>
      <div className="floating-icon icon-2" style={{ translate: `${mousePos.x * 30}px ${mousePos.y * 30}px` }}>🚀</div>
      <div className="floating-icon icon-3" style={{ translate: `${mousePos.x * -40}px ${mousePos.y * 20}px` }}>☕</div>
      <div className="floating-icon icon-4" style={{ translate: `${mousePos.x * 20}px ${mousePos.y * -40}px` }}>⚛️</div>

      <div className="container hero-content">
        <div className="hero-text" style={{ translate: `${mousePos.x * 10}px ${mousePos.y * 10}px` }}>
          <h3><span className="wave-emoji">👋</span> Hi, I'm</h3>
          <h1>Mandvi</h1>
          <h2 className="hero-role">I am a <span className="typing-text">{text}</span><span className="cursor">|</span></h2>
          <p className="hero-description">
            I create beautifully simple things, and I love what I do. 
            Computer Science Student passionate about building accessible and performant web experiences.
          </p>
          
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1ftYUhKiUFZB0Z6iz5nm_HbqaF46U0tAp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        
        <div className="hero-image" style={{ translate: `${mousePos.x * -15}px ${mousePos.y * -15}px` }}>
          {/* Note: Ensure profile.jpg is in src/assets/ */}
          <img src={profileImg} alt="Mandvi" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
