import React from 'react';
import { motion } from 'framer-motion';

const particles = [
  { left: '8%', top: '12%' }, { left: '22%', top: '28%' }, { left: '38%', top: '18%' },
  { left: '55%', top: '10%' }, { left: '70%', top: '24%' }, { left: '84%', top: '14%' },
  { left: '12%', top: '68%' }, { left: '30%', top: '58%' }, { left: '46%', top: '70%' },
  { left: '62%', top: '60%' }, { left: '78%', top: '66%' }, { left: '88%', top: '50%' },
  { left: '16%', top: '42%' }, { left: '34%', top: '78%' }, { left: '58%', top: '38%' }, { left: '74%', top: '84%' }
];

const TechStackBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-sm bg-emerald-400/30 shadow-[0_0_16px_rgba(16,185,129,0.25)]"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -14, 0], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 4 + (i % 5), delay: i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default TechStackBg;


