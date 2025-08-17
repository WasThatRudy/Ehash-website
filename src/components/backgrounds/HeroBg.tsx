import React from 'react';
import { motion } from 'framer-motion';

const HeroBg: React.FC = () => {
  const dots = [0, 60, 120, 180, 240, 300];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0.18 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-[80vw] max-w-[980px] aspect-square rounded-full border border-green-400/15" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0.12 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-[50vw] max-w-[640px] aspect-square rounded-full border border-emerald-400/10" />
      </motion.div>

      {/* Orbiting dots */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ width: '70vmin', height: '70vmin' }}
      >
        {dots.map((deg, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${deg}deg) translateX(34vmin)` }}
          >
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-emerald-400/50 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroBg;


