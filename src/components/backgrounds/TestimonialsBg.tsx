import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[{ top: '15%', left: '12%', size: 160, opacity: 0.08 }, { top: '55%', left: '70%', size: 220, opacity: 0.06 }, { top: '35%', left: '40%', size: 180, opacity: 0.07 }].map((q, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-300"
          style={{ top: q.top, left: q.left, opacity: q.opacity }}
          animate={{ rotate: [0, 6, -6, 0], y: [0, -8, 0] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Quote size={q.size as number} />
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialsBg;


