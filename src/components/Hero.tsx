import { motion } from 'framer-motion';
import HeroBg from './backgrounds/HeroBg';
import TechReferencesBg from './backgrounds/TechReferencesBg';

const Hero = () => {
  const titleWords = ["From", "Concept", "to", "Cloud:", "We", "Build", "&", "Run", "Your", "Website"];
  
  return (
    <section className="h-full relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <HeroBg />
      <TechReferencesBg opacity={0.1} size={40} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
          >
            E#
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 mb-6 leading-tight"
          >
            {titleWords.slice(0, 4).map((word, index) => (
              <span key={index} className="inline-block mr-4">
                {word}
              </span>
            ))}
            <br />
            <span className="text-green-400 inline-block mr-4">
              We
            </span>
            <span className="text-green-400 inline-block mr-4">
              Build
            </span>
            <span className="text-green-400 inline-block mr-4">
              &
            </span>
            <span className="text-green-400 inline-block mr-4">
              Run
            </span>
            <br />
            {titleWords.slice(-2).map((word, index) => (
              <span key={index + 8} className="inline-block mr-4">
                {word}
              </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            E# provides end-to-end web solutions, so you can focus on your business.
          </motion.p>
          
{/* 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-10 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { label: 'Projects Delivered', value: '120+' },
              { label: 'Avg. NPS', value: '9.4/10' },
              { label: 'Avg. Uptime', value: '99.99%' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}

          <div className="relative mt-12 overflow-hidden">
            {/* Seamless infinite marquee: duplicate content and translate continuously */}
            <div className="flex gap-4 whitespace-nowrap">
              {[0,1].map((loop) => (
                <motion.div
                  key={loop}
                  className="flex gap-4"
                  animate={{ x: ['0%', '-100%'] }}
                  transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                  style={{ willChange: 'transform' }}
                >
                  {[
                    // Frontend
                    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular', 'Svelte', 'Webpack', 'Vite',
                    // Backend
                    'Node.js', 'Python', 'Django', 'FastAPI', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',
                    // DevOps & Infrastructure
                    'CI/CD', 'Kubernetes', 'Docker', 'GitHub', 'DevOps', 'Observability', 'SRE', 'Terraform', 'AWS', 'Azure',
                    // AI/ML
                    'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'LangChain', 'Hugging Face', 'MLOps', 'Computer Vision',
                    // MCP & Modern Web
                    'MCP', 'WebAssembly', 'PWA', 'Microservices', 'API Gateway', 'Message Queues', 'Event Streaming',
                    // Business & Tools
                    'Branding', 'SaaS', 'Analytics', 'Monitoring', 'Logging', 'Testing', 'Security', 'Performance'
                  ].map((chip) => (
                    <span key={`${loop}-${chip}`} className="px-4 py-2 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300">
                      {chip}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;