import React from 'react';
import { motion } from 'framer-motion';

const bubbles = [
  { left: '10%', size: 80, delay: 0 },
  { left: '28%', size: 56, delay: 1.2 },
  { left: '45%', size: 96, delay: 0.6 },
  { left: '62%', size: 64, delay: 1.8 },
  { left: '78%', size: 72, delay: 0.9 },
  { left: '88%', size: 52, delay: 1.5 }
];

const TeamBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-20%] rounded-full bg-emerald-400/10"
          style={{ left: b.left, width: b.size, height: b.size, filter: 'blur(2px)' }}
          animate={{ y: ['120%', '-20%'] }}
          transition={{ duration: 16 + i * 2, delay: b.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

export default TeamBg;


