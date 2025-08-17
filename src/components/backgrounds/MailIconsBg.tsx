import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Paperclip } from 'lucide-react';

const MailIconsBg: React.FC = () => {
  const spots = [
    { top: '20%', left: '12%', Icon: Mail },
    { top: '36%', left: '76%', Icon: Send },
    { top: '62%', left: '24%', Icon: Paperclip },
    { top: '78%', left: '68%', Icon: Mail },
  ];

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {spots.map(({ top, left, Icon }, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-200/20"
          style={{ top, left }}
          animate={{ y: [0, -8, 0], rotate: [0, 6, -4, 0] }}
          transition={{ duration: 16 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
};

export default MailIconsBg;


