import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children, threshold = 0.1, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const style = {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.5, 0, 0, 1) ${delay}s`
  };

  const visibleStyle = {
    opacity: 1,
    transform: 'translateY(0)'
  };

  return (
    <div ref={ref} style={isVisible ? { ...style, ...visibleStyle } : style}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
