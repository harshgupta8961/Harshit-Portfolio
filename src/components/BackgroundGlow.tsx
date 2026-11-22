import React, { useEffect, useState } from 'react';

export const BackgroundGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Static top subtle gradient */}
      <div 
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Subtle dynamic mouse glow */}
      <div
        className="hidden md:block absolute h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px] transition-transform duration-300 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(168, 85, 247, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Ambient background grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)]" />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />
    </div>
  );
};
