import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, ServerCog, Workflow, Boxes, Cloud } from 'lucide-react';

const icons = [GitBranch, GitCommit, ServerCog, Workflow, Boxes, Cloud];

const spots = [
  { top: '10%', left: '8%' },
  { top: '24%', left: '78%' },
  { top: '42%', left: '18%' },
  { top: '58%', left: '64%' },
  { top: '72%', left: '32%' },
  { top: '84%', left: '82%' },
];

const DevOpsIconsBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {spots.map((pos, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            className="absolute text-emerald-300/15"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [0, -10, 0], rotate: [0, 8, -6, 0] }}
            transition={{ duration: 18 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={48} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default DevOpsIconsBg;


