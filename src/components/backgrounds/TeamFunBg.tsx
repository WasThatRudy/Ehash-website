import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { txt: '🥑', top: '12%', left: '10%' },
  { txt: '🚀', top: '22%', left: '78%' },
  { txt: '🐛', top: '36%', left: '22%' },
  { txt: '💻', top: '48%', left: '64%' },
  { txt: '⚙️', top: '66%', left: '30%' },
  { txt: '🧪', top: '78%', left: '82%' },
  { txt: '</>', top: '30%', left: '88%' },
  { txt: '{ }', top: '72%', left: '14%' },
];

const TeamFunBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {items.map((it, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-200/40"
          style={{ top: it.top, left: it.left, fontSize: 22 }}
          animate={{ y: [0, -8, 0], rotate: [0, 8, -6, 0] }}
          transition={{ duration: 14 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          {it.txt}
        </motion.div>
      ))}
    </div>
  );
};

export default TeamFunBg;


