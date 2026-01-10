import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="subtitle">Some of my notable work and personal projects</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
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
