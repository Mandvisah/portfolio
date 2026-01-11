import React from 'react';
import { projects } from '../data/projects';
import useMousePosition from '../hooks/useMousePosition';

const Projects = () => {
  const { x, y } = useMousePosition();

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title" style={{ translate: `${x * 10}px ${y * 10}px` }}>Projects</h2>
        <p className="subtitle" style={{ translate: `${x * 5}px ${y * 5}px` }}>Some of my notable work and personal projects</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ translate: `${x * ((index % 2 === 0 ? 1 : -1) * 10)}px ${y * 10}px` }}
            >
              <div className="project-content">
                <span className="project-category">Web Development</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                     View Live ↗
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                     GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
