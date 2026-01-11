import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const About = () => {
  const { x, y } = useMousePosition();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" style={{ translate: `${x * 10}px ${y * 10}px` }}>About Me</h2>
        
        {/* Terminal/IDE Style Window */}
        <div 
          className="terminal-window"
          style={{ 
            translate: `${x * -20}px ${y * -20}px`
          }}
        >
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="close"></span>
              <span className="minimize"></span>
              <span className="maximize"></span>
            </div>
            <div className="terminal-title">mandvi@portfolio: ~/about</div>
          </div>
          <div className="terminal-body">
            <div className="code-line">
              <span className="prompt">$</span> <span className="command">cat</span> my_story.txt
            </div>
            <div className="output-text">
              <p>
                I'm a <span className="highlight">Computer Science student</span> 🎓 exploring the world of web development.
              </p>
              <p>
                Passionate about <span className="highlight">frontend technologies</span> 🌐 and building clean, user-centric interfaces.
              </p>
              <p>
                Current focus: <span className="var-name">React</span>, <span className="var-name">Node.js</span>, and creating efficient solutions.
              </p>
            </div>
            <br />
            <div className="code-line">
              <span className="prompt">$</span> <span className="command">echo</span> $GOAL
            </div>
            <div className="output-text">
              "To collaborate on exciting projects 🤝 and leave a mark in the tech community."
            </div>
             <br />
            <div className="code-line">
              <span className="prompt">$</span> <span className="cursor-blink">_</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
