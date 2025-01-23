// src/components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/YourUsername'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/YourUsername'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/YourUsername'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:your.email@example.com'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f] border-t border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              About
            </a>
            <a href="#work" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Work
            </a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Designed & Built by{' '}
              <span className="text-cyan-400">Indranil</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Optional: Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-cyan-400 border border-cyan-400/20 rounded-full p-2 hover:bg-cyan-400/10 transition-colors duration-300"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;