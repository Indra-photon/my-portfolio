// src/components/home/Hero.jsx
import { motion } from 'framer-motion';
import AnimatedBackground from './DynamicBackground';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        {
          name: 'GitHub',
          icon: <Github size={20} />,
          url: 'https://github.com/Indra-photon'
        },
        {
          name: 'LinkedIn',
          icon: <Linkedin size={20} />,
          url: 'https://www.linkedin.com/in/indranil-maiti-7542941b7/'
        },
        {
          name: 'Twitter',
          icon: <Twitter size={20} />,
          url: 'https://x.com/Nil_phy_dreamer'
        },
        {
          name: 'Facebook',
          icon: <Facebook size={20} />,
          url: 'https://www.facebook.com/indranil.maiti.564/'
        }
      ];

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 20,
        opacity: 1,
        transition: { duration: 0.5 }
      }
    };
  return (
    <div className="relative h-screen overflow-hidden">
      {/* New Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-xl mb-4"
        >
          Hello, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 text-transparent bg-clip-text text-center"
        >
          Indranil
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-300 text-2xl md:text-3xl mb-4 text-center"
        >
          Full Stack Developer
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-cyan-400 text-xl mb-1 text-center"
        >
          Specialized in MERN Stack
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-cyan-400 text-xl mb-1 text-center flex items-center space-x-6"
        >
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
        </motion.div>

        <motion.div 
            variants={itemVariants}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-500"
            >
              View My Projects
            </motion.button>
          </motion.div>
      </div>
    </div>
  );
};

export default Hero;