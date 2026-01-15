import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Experience = () => {
    const experiences = [
        {
            company: "Freelance & Personal Projects",
            role: "Full Stack Developer",
            period: "2023 - Present",
            description: [
              "Architected and deployed scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
              "Implemented secure authentication systems and optimized database queries for performance.",
              "Collaborated with open-source communities to fix bugs and improved documentation coverage."
            ],
        },
        {
            company: "University Code Club",
            role: "Technical Member",
            period: "2022 - Present",
            description: [
              "Organized coding workshops and hackathons for 200+ students.",
              "Mentored juniors in Data Structures & Aogorithms and basic web development.",
              "Collaborated on group projects using Git version control and Agile methodologies."
            ],
        },
      ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-8 relative">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Work <span className="text-blue-500">Experience</span></h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-gray-900/50 p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                    <div className="flex-shrink-0 text-left md:text-right md:w-32">
                        <span className="text-blue-400 font-medium whitespace-nowrap">{exp.period}</span>
                        <h4 className="text-lg font-bold text-white mt-1">{exp.company}</h4>
                    </div>
                    
                    <div className="border-l-2 border-blue-500/30 pl-6 relative md:flex-1 hidden md:block">
                        <div className="absolute top-2 -left-[9px] w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                    </div>
                     {/* Mobile version separator */}
                    <div className="h-[2px] w-10 bg-blue-500/30 md:hidden my-2"></div>

                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                           {exp.description.map((desc, i) => (
                               <li key={i}>{desc}</li>
                           ))} 
                        </ul>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
