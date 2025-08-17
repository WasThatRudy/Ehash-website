import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import TechStackBg from './backgrounds/TechStackBg';
import DependencyGraphBg from './backgrounds/DependencyGraphBg';

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'React'},
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'Tailwind' }
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'Django' }
      ],
    },
    {
      title: 'Data & Infra',
      icon: '🗄️',
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'PostgreSQL' },
        { name: 'AWS' },
        { name: 'Docker' }
      ],
    },
    {
      title: 'DevOps',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      items: [
        { name: 'GitHub Actions' },
        { name: 'Kubernetes' },
        { name: 'Terraform' },
        { name: 'CI/CD' }
      ],
    }
  ];

  return (
    <AnimatedSection>
      <section id="services" className="min-h-screen relative overflow-hidden py-20 bg-gray-900 flex items-center">
        <TechStackBg />
        <DependencyGraphBg />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and modern development practices to deliver exceptional solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-xl mr-3 shadow-lg`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{cat.title}</h3>
                      <div className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Tech Items - Centered */}
                  <div className="flex flex-wrap gap-2 justify-center items-center min-h-[80px]">
                    {cat.items.map((item, itemIndex) => (
                      <motion.span
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-400/15 to-teal-400/15 text-emerald-300 border border-emerald-400/30 text-sm font-medium hover:from-emerald-400/25 hover:to-teal-400/25 hover:border-emerald-400/50 hover:scale-105 transition-all duration-300 cursor-default shadow-md hover:shadow-emerald-500/20"
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3 w-16 h-16 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 text-emerald-300">
              <span className="text-sm font-medium">Always learning, always improving</span>
              <span className="text-emerald-400">✨</span>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default TechStack;