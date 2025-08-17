import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import ContactBg from './backgrounds/ContactBg';
import MailIconsBg from './backgrounds/MailIconsBg';
import TechReferencesBg from './backgrounds/TechReferencesBg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatedSection>
      <section id="mail-us" className="min-h-screen relative overflow-hidden py-20 bg-gray-800 flex items-center">
      <ContactBg />
      <MailIconsBg />
      <TechReferencesBg opacity={0.06} size={28} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-300/90">Let's discuss your next big idea</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send
                <Send className="ml-2" size={18} />
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                <p className="text-gray-300 mb-6">
                  Ready to start your project? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                </p>
              </div>
              
              <div className="space-y-4">
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <Mail className="text-green-400 mr-3" size={20} />
                  <a href="mailto:hello@esharp.dev" className="text-white hover:text-green-400 transition-colors duration-200">
                    hello@esharp.dev
                  </a>
                </motion.div>
                
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <Github className="text-green-400 mr-3" size={20} />
                  <a href="#" className="text-white hover:text-green-400 transition-colors duration-200">
                    github.com/esharp
                  </a>
                </motion.div>
                
                <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                  <Linkedin className="text-green-400 mr-3" size={20} />
                  <a href="#" className="text-white hover:text-green-400 transition-colors duration-200">
                    linkedin.com/company/esharp
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;