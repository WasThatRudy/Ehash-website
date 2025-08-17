import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      className="min-h-screen flex items-center bg-gray-900 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div 
              className="text-2xl font-bold text-green-400 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              E#
            </motion.div>
            <p className="text-gray-400">Building the future, one website at a time.</p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              whileHover={{ y: -3, scale: 1.1 }}
            >
              <Twitter size={24} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 E# Web Development Agency. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;