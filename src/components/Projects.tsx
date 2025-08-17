import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'pbdsce/iict-hack',
      technologies: 'Next.js, Node.js, MongoDB',
    },
    {
      id: 2,
      name: 'pbdsce/sinkedinWeb',
      technologies: 'Next.js, Firebase',
    },
    {
      id: 3,
      name: 'pbdsce/Zenith',
      technologies: 'Next.js,Node.js, MongoDB',
    },
    {
      id: 4,
      name: 'Real Estate Portal',
      technologies: 'Next.js, MongoDB',
    },
  ];

  return (
    <AnimatedSection>
      <section id="projects" className="min-h-screen relative overflow-hidden py-20 bg-gray-900 flex items-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Repositories</h2>
            <p className="text-sm text-gray-400">Pinned selections we’re proud of</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <button className="px-3 py-1.5 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800">Pinned</button>
            <button className="px-3 py-1.5 rounded-md border border-gray-800 text-gray-500 hover:bg-gray-800">All</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => {
            const stars = Math.floor(200 + Math.random() * 1200);
            const forks = Math.floor(50 + Math.random() * 400);
            const langColor: Record<string, string> = {
              TypeScript: '#3178c6',
              JavaScript: '#facc15',
              Python: '#3776AB',
              Go: '#00ADD8',
            };
            return (
              <motion.div
                key={project.id}
                className="rounded-lg border border-gray-800 bg-gray-900 hover:border-emerald-500/30 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-emerald-300 font-semibold truncate">{project.name.toLowerCase().replace(/\s+/g, '-')}</h3>
                    <button className="text-xs px-3 py-1 rounded-md border border-gray-700 text-gray-300 hover:bg-gray-800">Star</button>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.technologies} project with production-ready setup.</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>★ {stars}</span>
                    <span>⑂ {forks}</span>
                    <span>Updated {Math.floor(Math.random()*20)+1}d ago</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;