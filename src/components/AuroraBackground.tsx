import React from 'react';
import { motion } from 'framer-motion';

interface AuroraBackgroundProps {
  className?: string;
  opacity?: number; // 0..1 global opacity
  blur?: number; // tailwind blur strength in px approximation
}

// Subtle animated blurred gradient blobs for section backgrounds
const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = '',
  opacity = 0.18,
  blur = 64,
}) => {
  const commonStyles: React.CSSProperties = {
    filter: `blur(${blur}px)`,
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Emerald blob */}
      <motion.div
        style={{
          ...commonStyles,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,1) 0%, rgba(16,185,129,0) 60%)',
          opacity,
        }}
        className="absolute -top-24 -left-24 w-[45vw] h-[45vw] rounded-full"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Teal blob */}
      <motion.div
        style={{
          ...commonStyles,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(45,212,191,1) 0%, rgba(45,212,191,0) 60%)',
          opacity,
        }}
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[55vw] h-[55vw] rounded-full"
        animate={{ x: [0, -15, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Violet blob (very subtle for depth) */}
      <motion.div
        style={{
          ...commonStyles,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,1) 0%, rgba(139,92,246,0) 60%)',
          opacity: opacity * 0.7,
        }}
        className="absolute -right-32 top-1/3 w-[40vw] h-[40vw] rounded-full"
        animate={{ x: [0, -10, 5, 0], y: [0, 10, -5, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
};

export default AuroraBackground;


