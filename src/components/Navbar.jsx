import React, { useEffect, useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling on body when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="text-xl font-bold text-white tracking-tighter hover:text-blue-500 transition-colors">
                        mandvi<span className="text-blue-500">.tech</span>
                    </a>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                            <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
                            <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="md:hidden z-50 relative">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2" aria-label="Toggle menu">
                            {isOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform ${isOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 md:hidden h-screen w-screen`}>
                 <a href="#home" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">Home</a>
                 <a href="#about" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">About</a>
                 <a href="#skills" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">Skills</a>
                 <a href="#experience" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">Experience</a>
                 <a href="#projects" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">Projects</a>
                 <a href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-white hover:text-blue-500 transition-colors">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
