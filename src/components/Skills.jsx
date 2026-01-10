import React from 'react';

const Skills = () => {
  const mySkills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"];

  return (
    <section id="skills" className="section skills-container">
      <div className="container">
        <h2 className="section-title">Skills & Proficiency</h2>
        <p className="subtitle">Tools and technologies I use to build things</p>
        <div className="skills-wrapper">
          {mySkills.map((skill, index) => (
            <div key={index} className="skill-pill">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
