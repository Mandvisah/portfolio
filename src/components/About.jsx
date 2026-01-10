import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
            <div className="about-text">
                <p>
                  I'm a Computer Science student interested in web development and frontend technologies.
                  Passionate about building clean, user-friendly interfaces and exploring new technologies.
                  I enjoy solving problems and creating efficient solutions through code.
                </p>
                <br />
                <p>
                  Always eager to collaborate on interesting projects and learn from others in the tech community.
                </p>
            </div>
            {/* Can add another column for stats or image if desired */}
        </div>
      </div>
    </section>
  );
};

export default About;
