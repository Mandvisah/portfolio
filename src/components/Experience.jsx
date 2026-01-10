import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
            {/* 
                Placeholder items. 
                Users can uncomment and fill this data when they have experience.
            */}
            
            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>Student / Freelance</h4>
                <p>
                Building responsive web applications using React and modern CSS frameworks. 
                Learning and applying best practices in web development.
                </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022 - 2026</div>
            <div className="timeline-content">
                <h3>Computer Science Student</h3>
                <h4>University</h4>
                <p>
                Pursuing a degree in Computer Science & Engineering. 
                Focusing on Data Structures, Algorithms, and Web Technologies.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
