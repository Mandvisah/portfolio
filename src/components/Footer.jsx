import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400 bg-black/10 border-t border-white/5 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Mandvi. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
             <a href="https://github.com/Mandvisah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-xl">
               <FaGithub />
             </a>
             <a href="https://www.linkedin.com/in/mandvi-gupta-96ab98280/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-xl">
               <FaLinkedin />
             </a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors text-xl">
               <FaTwitter />
             </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
