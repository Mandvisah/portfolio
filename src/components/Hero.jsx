import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10" />

      <RevealOnScroll>
        <div className="container mx-auto px-8 z-10 flex flex-col-reverse md:flex-row items-center justify-between h-full">
          
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-3 py-1 mb-4 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <p className="text-blue-400 font-semibold tracking-wide uppercase text-xs">
                 Welcome to my portfolio
                </p> 
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight pb-2 drop-shadow-sm">
              Hi, I'm Mandvi
            </h2>

            <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed md:max-w-xl">
               I’m a <span className="text-blue-100 font-semibold border-b-2 border-blue-500 hover:border-purple-500 transition-colors cursor-pointer">Full-Stack Developer</span>, passionate about building clean, scalable web applications. 
               Turning ideas into reality through code.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-6">
              <a 
                href="/MANDVI_CV_.pdf.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600/90 hover:bg-blue-500 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              >
                View Resume
              </a>

              <a href="#contact" className="border border-blue-500/30 text-blue-300 hover:text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                Contact Me

              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end mb-12 md:mb-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[80px] opacity-30 rounded-full"></div>
            <img 
              src={profilePic} 
              alt="Mandvi" 
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-[0_0_40px_rgba(59,130,246,0.5)] border-4 border-blue-500/20 hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-[0_0_80px_rgba(59,130,246,0.6)] z-10"
            />
          </div>
        
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Hero;
