import React from 'react';
import { motion } from 'framer-motion';

const ContactBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-[-20%] right-[-20%] h-40 rounded-full"
          style={{
            top: `${20 + i * 25}%`,
            background: i % 2 === 0
              ? 'linear-gradient(90deg, rgba(16,185,129,0.0), rgba(16,185,129,0.12), rgba(16,185,129,0.0))'
              : 'linear-gradient(90deg, rgba(45,212,191,0.0), rgba(45,212,191,0.12), rgba(45,212,191,0.0))',
            filter: 'blur(20px)'
          }}
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 18 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}
    </div>
  );
};

export default ContactBg;


