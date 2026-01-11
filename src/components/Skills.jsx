import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Java", "C++"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker"],
    },
  ];

  return (
    <section id="skills" className="section skills-container">
      <div className="container">
        <h2 className="section-title">Skills & Proficiency</h2>
        <p className="subtitle">Tools and technologies I use to build things</p>
        
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index} className="skill-category-card">
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skill-list">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="skill-pill">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
