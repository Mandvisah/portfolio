import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Skills = () => {
    const skills = [
        {
          category: "Frontend",
          technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
        },
        {
          category: "Backend",
          technologies: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "Java", "C++"],
        },
        {
          category: "Tools & Platforms",
          technologies: ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Figma"],
        },
      ];

  return (
    <section id="skills" className="min-h-screen items-center justify-center py-20 px-8 relative bg-black/5 flex flex-col">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills <span className="text-blue-500">& Technologies</span></h2>
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 transform">
                        <h3 className="text-xl font-bold mb-4 text-center text-blue-400">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {skill.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Skills;
