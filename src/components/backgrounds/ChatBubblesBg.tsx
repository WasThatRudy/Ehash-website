import React from 'react';
import { motion } from 'framer-motion';

const bubbles = [
  { top: '16%', left: '14%', text: 'ship it 🚀' },
  { top: '28%', left: '68%', text: 'LGTM ✅' },
  { top: '46%', left: '22%', text: 'nit: spacing' },
  { top: '60%', left: '70%', text: 'pair at 3?' },
  { top: '78%', left: '36%', text: 'tests pass ✅' },
];

const ChatBubblesBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl border border-white/10 bg-white/5 text-gray-200 text-xs px-3 py-2"
          style={{ top: b.top, left: b.left, backdropFilter: 'blur(6px)' }}
          animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          {b.text}
        </motion.div>
      ))}
    </div>
  );
};

export default ChatBubblesBg;


