import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-8 relative bg-black/5">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">About <span className="text-blue-500">Me</span></h2>
          
          <div className="bg-gray-800/50 rounded-xl p-8 border border-white/10 shadow-xl backdrop-blur-sm hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a Computer Science undergraduate completing my B.Tech in 2026. My focus is on <span className="text-blue-400 font-semibold">Full Stack Development</span>, where I enjoy creating responsive web applications and efficient backend systems. I am eager to apply my knowledge of React, Node.js, and database management to solve real-world problems and contribute to innovative software solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-4 bg-gray-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-blue-400">Education</h3>
                <p className="text-gray-400">
                  B.Tech in Computer Science<br />
                  (2022 - 2026) <br />
                  <strong>Relevant Coursework:</strong> <br />Data Structures, Algorithms (DSA), Web Development, Database Management Systems (DBMS).
                </p>
              </div>
              
              <div className="rounded-lg p-4 bg-gray-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-2 text-blue-400">My Interests</h3>
                <p className="text-gray-400">
                  I am deeply interested in system architecture and UI/UX design. In my free time, I participate in coding challenges, explore open-source projects, and stay updated with the latest trends in cloud computing and AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
