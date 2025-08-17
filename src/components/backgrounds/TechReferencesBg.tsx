import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Bug,
  Coffee,
  Terminal,
  Code2,
  Database,
  Rocket,
  Cpu,
  Keyboard,
  MousePointer,
  Braces,
  Brackets,
  Cloud,
  Zap,
  Package,
  Puzzle,
  Smile,
  Monitor,
  Layers,
} from 'lucide-react';

const iconComponents = [
  Github,
  Bug,
  Coffee,
  Terminal,
  Code2,
  Database,
  Rocket,
  Cpu,
  Keyboard,
  MousePointer,
  Braces,
  Brackets,
  Cloud,
  Zap,
  Package,
  Puzzle,
  Smile,
  Monitor,
  Layers,
];

const positions = [
  { top: '10%', left: '8%' },
  { top: '18%', left: '72%' },
  { top: '30%', left: '20%' },
  { top: '40%', left: '60%' },
  { top: '55%', left: '12%' },
  { top: '62%', left: '80%' },
  { top: '74%', left: '36%' },
  { top: '82%', left: '66%' },
];

interface TechReferencesBgProps {
  opacity?: number;
  size?: number;
}

const TechReferencesBg: React.FC<TechReferencesBgProps> = ({ opacity = 0.12, size = 44 }) => {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {positions.map((pos, i) => {
        const Icon = iconComponents[i % iconComponents.length];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: pos.top, left: pos.left, opacity }}
            animate={{ y: [0, -10, 0], rotate: [0, 6, -4, 0] }}
            transition={{ duration: 16 + i * 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={size} className="text-emerald-200" />
          </motion.div>
        );
      })}
      {/* Fun text bits */}
      {[{ top: '12%', left: '40%', text: '</>' }, { top: '68%', left: '10%', text: '{ }' }, { top: '28%', left: '86%', text: '404?' }].map((t, idx) => (
        <motion.span
          key={idx}
          className="absolute text-emerald-200/60 font-mono"
          style={{ top: t.top, left: t.left, fontSize: 18 }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 10 + idx * 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {t.text}
        </motion.span>
      ))}
    </div>
  );
};

export default TechReferencesBg;


