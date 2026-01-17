import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex justify-center mb-6">
            <img 
              src={profilePic} 
              alt="Mandvi" 
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-[0_0_25px_rgba(59,130,246,0.6)] border-4 border-blue-500/20 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Mandvi
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
             I’m a full-stack developer, passionate about building clean, scalable web applications. 
             Turning ideas into reality through code.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="/MANDVI_CV_.pdf.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Resume
            </a>

            <a href="#contact" className="border border-blue-600/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
              Contact Me

            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Hero;
