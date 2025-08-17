import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import TestimonialsBg from './backgrounds/TestimonialsBg';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "E# transformed our online presence completely. Their attention to detail and technical expertise exceeded our expectations. The website they built has increased our conversions by 300%.",
      name: "Jennifer Martinez",
      company: "TechStart Solutions"
    },
    {
      quote: "Working with E# was a game-changer for our business. They delivered a robust e-commerce platform that handles thousands of transactions daily without any issues. Highly recommended!",
      name: "David Thompson",
      company: "RetailMax Inc."
    },
    {
      quote: "The team at E# doesn't just build websites, they build digital experiences. Their strategic approach and ongoing support have made them our trusted technology partner.",
      name: "Lisa Wang",
      company: "Global Dynamics"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection>
      <section className="min-h-screen relative overflow-hidden py-20 bg-gray-900 flex items-center">
      <TestimonialsBg />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300/90">Success stories from satisfied partners</p>
        </motion.div>
        
        {/* 3-card layout with active center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[current, (current + 1) % testimonials.length, (current + 2) % testimonials.length].map((idx, i) => (
            <div key={idx} className={`rounded-2xl border border-white/10 backdrop-blur-xl p-6 bg-white/5 ${i === 0 ? 'md:scale-105 ring-1 ring-emerald-400/20' : ''}`}>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Quote className="text-green-400 mb-4" size={32} />
              </motion.div>
              <p className="text-gray-300 leading-relaxed mb-6">"{testimonials[idx].quote}"</p>
              <div>
                <p className="text-white font-semibold">{testimonials[idx].name}</p>
                <p className="text-emerald-300 text-sm">{testimonials[idx].company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          <motion.button
            onClick={() => setCurrent((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10"
            whileHover={{ y: -2 }}
          >
            Prev
          </motion.button>
          <motion.button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10"
            whileHover={{ y: -2 }}
          >
            Next
          </motion.button>
        </div>

        {/* Company logos marquee unique to testimonials */}
        <div className="relative mt-10 overflow-hidden">
          <div className="flex gap-6 whitespace-nowrap">
            {[0,1].map((loop) => (
              <motion.div
                key={loop}
                className="flex gap-6 text-gray-400/80"
                animate={{ x: ['0%', '-100%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                {['Acme', 'Globex', 'Umbrella', 'WayneTech', 'Stark', 'Wonka'].map((name) => (
                  <span key={`${loop}-${name}`} className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">
                    {name}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonials;