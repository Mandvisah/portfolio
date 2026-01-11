import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleTouchMove = (e) => {
        // Use the first touch point
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const x = (touch.clientX / window.innerWidth - 0.5) * 2;
            const y = (touch.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        }
    };

    // gyroscope (if available and no permission needed, e.g. Android Chrome)
    const handleOrientation = (e) => {
        // Normalize values approximately
        // beta: front-back tilt [-180, 180] -> target range 45deg tilt
        // gamma: left-right tilt [-90, 90] -> target range 45deg tilt
        
        if (e.beta === null || e.gamma === null) return;
        
        const x = Math.min(Math.max(e.gamma / 45, -1), 1);
        const y = Math.min(Math.max((e.beta - 45) / 45, -1), 1); 
        
        setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return mousePos;
};

export default useMousePosition;