import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
  const projects = [
      {
        title: "Startup-Investor Connect", 
        description: "Developed a full-stack platform connecting startups with potential investors. Implemented secure user authentication, profile management, and real-time messaging using Node.js and MongoDB.",
        tech: ["React.js", "MongoDB", "Express.js", "Node.js"],
        link: "#",
        github: "#"
      },
      {
        title: "M-Vi Shopio (E-Commerce)",
        description: "Built a responsive e-commerce application with React and Redux. Features include product filtering, a shopping cart with persistent state, and secure checkout integration.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://e-com-website-steel.vercel.app/",
        github: "https://github.com/Mandvisah/e_com_website.git"
      },
      {
        title: "Real-Time Chat Application",
        description: "Created a real-time chat solution using Firebase and React. Supported features include instant messaging, user presence indicators, and chat history retention.",
        tech: ["React", "Firebase", "CSS"],
        link: "#",
        github: "#"
      },
      {
        title: "Interactive Portfolio",
        description: "Designed and developed a personal portfolio using React and Tailwind CSS. Implemented smooth scrolling, component-based architecture, and fully responsive design for all devices.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        link: "#",
        github: "#"
      },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured <span className="text-blue-500">Projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                  <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                              <span key={idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                  {tech}
                              </span>
                          ))}
                      </div>
                      <div className="flex justify-between items-center">
                          <a href={project.link} className={`text-blue-400 hover:text-blue-300 transition-colors my-4 ${project.link === '#' ? 'cursor-not-allowed opacity-50' : ''}`}>
                            {project.link === '#' ? 'Live Demo Coming Soon' : 'View Project →'}
                          </a>
                          <a href={project.github} className={`text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-2 ${project.github === '#' ? 'cursor-not-allowed opacity-50' : ''}`}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 filter invert" /> 
                            GitHub
                          </a>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
