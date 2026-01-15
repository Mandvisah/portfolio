import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white tracking-tighter hover:text-blue-500 transition-colors">
          mandvi<span className="text-blue-500">.tech</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-3xl cursor-pointer z-50 relative" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
           <li><a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a></li>
           <li><a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a></li>
           <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors"> Skills </a></li>
           <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors"> Experience </a></li>
           <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors"> Projects </a></li>
           <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors"> Contact </a></li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 w-full bg-black/90 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40 flex items-center justify-center`}>
         <ul className="flex flex-col items-center space-y-8">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-blue-500 transition-colors">About</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-blue-500 transition-colors">Experience</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-blue-500 transition-colors">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl text-white hover:text-blue-500 transition-colors">Contact</a></li>
         </ul>
      </div>
    </nav>
  );
};

export default Navbar;
