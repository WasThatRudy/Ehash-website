import React from 'react';
import { motion } from 'framer-motion';

const ProjectsBg: React.FC = () => {
  const gridStyle: React.CSSProperties = {
    backgroundImage:
      'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)'
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0"
        style={gridStyle}
        animate={{ backgroundPosition: ['0px 0px, 0px 0px', '60px 60px, 60px 60px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Moving highlight sweep */}
      <motion.div
        className="absolute -inset-y-10 -left-1/2 w-[120vw]"
        style={{
          background: 'linear-gradient(120deg, transparent 40%, rgba(16,185,129,0.08) 50%, transparent 60%)'
        }}
        animate={{ x: ['-10%', '60%', '-10%'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default ProjectsBg;


