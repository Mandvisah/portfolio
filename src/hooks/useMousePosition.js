import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable parallax on mobile to prevent layout issues and jitter
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center of screen (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePos;
};

export default useMousePosition;