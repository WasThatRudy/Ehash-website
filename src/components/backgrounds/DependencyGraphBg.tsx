import React from 'react';
import { motion } from 'framer-motion';

// Animated network of nodes and edges to hint at tech stacks/dependencies
const nodes = [
  { x: '18%', y: '22%' },
  { x: '38%', y: '12%' },
  { x: '62%', y: '16%' },
  { x: '78%', y: '30%' },
  { x: '24%', y: '48%' },
  { x: '50%', y: '42%' },
  { x: '72%', y: '54%' },
  { x: '30%', y: '72%' },
  { x: '56%', y: '78%' },
  { x: '82%', y: '70%' },
];

const edges: Array<[number, number]> = [
  [0,1],[1,2],[2,3],[0,4],[1,5],[5,6],[4,7],[7,8],[6,9],[5,8]
];

const DependencyGraphBg: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Edges */}
      {edges.map(([a,b], i) => {
        const A = nodes[a];
        const B = nodes[b];
        const x1 = A.x; const y1 = A.y; const x2 = B.x; const y2 = B.y;
        return (
          <motion.svg key={i} className="absolute" style={{ left: 0, top: 0, width: '100%', height: '100%' }}>
            <motion.line
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(16,185,129,0.15)" strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.svg>
        );
      })}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ left: n.x, top: n.y, width: 10, height: 10, background: 'rgba(16,185,129,0.35)', boxShadow: '0 0 20px rgba(16,185,129,0.35)' }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default DependencyGraphBg;


