import React from 'react';
import { motion } from 'framer-motion';

const commits = [
  'feat: add payment retries',
  'fix: race condition in cache',
  'chore: bump deps',
  'docs: update api guide',
  'refactor: extract hooks',
  'perf: lazy load charts',
  'test: add e2e flow',
];

const ProjectsCommitTicker: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="flex whitespace-nowrap">
        {[0,1].map((loop) => (
          <motion.div
            key={loop}
            className="flex gap-4 px-4 py-2"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{ willChange: 'transform' }}
          >
            {commits.map((c, i) => (
              <span key={`${loop}-${i}`} className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300">
                git: {c}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCommitTicker;


