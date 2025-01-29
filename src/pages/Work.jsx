// src/pages/Work.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DynamicBackground from '../components/home/DynamicBackground';
import ProjectCard from '../components/work/ProjectCard';
import pic1 from '../../src/assets/portfolio_pr_dubai.png'
import pic2 from '../../src/assets/avoron.png'
import pic3 from '../../src/assets/photographer-site.png'
import pic4 from '../../src/assets/Luxestore.png'

const categories = ['Freelance Projects', 'My Projects', 'SaaS Websites'];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('Freelance Projects');

  const freelanceProjects = [
    {
      id: 1,
      title: "Avoron, an E-commerce site",
      description: "An elegant website designed to showcase avoron's unique products and sell using whatsapp",
      techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion", "Appwrite"],
      liveLink: "https://www.avoron.in/",
      image: pic2,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Portfolio Site, a Photographer Lens",
      description: "An elegant portfolio website designed to showcase photographic work with smooth animations and responsive design.",
      techStack: ["React", "Tailwind CSS", "Node", "Express", "Framer Motion"],
      liveLink: "https://photography-website-ruby.vercel.app/",
      image: pic3,
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Facility Management Services, Dubai",
      description: "A comprehensive web application for ABS Dreams, showcasing facility management services with modern design and functionality.",
      techStack: ["React", "Tailwind CSS", "Node", "Express"],
      liveLink: "https://www.absdreamsfacilities.com/",
      image: pic1,
      category: "Frontend"
    },
  ];

  const myProjects = [
    {
      id: 1,
      title: "Luxe Store, ",
      description: "A Fully functional E-commerce website with payment integration, and admin dashboard ",
      techStack: ["React", "Tailwind CSS", "Node", "Express", "MongoDB"],
      liveLink: "https://e-commerce-smoky-omega.vercel.app/",
      image: pic4,
      category: "Full Stack"
    },
  ]

  // This will be expanded later with more projects
  const projects = {
    'Freelance Projects': freelanceProjects,
    'My Projects': myProjects,
    'SaaS Websites': []
  };

  return (
    <div className="min-h-screen bg-[#0a192f] relative overflow-hidden">
      <DynamicBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-cyan-400 mb-4 text-center"
        >
          My Works
        </motion.h2>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative
                ${selectedCategory === category 
                  ? 'text-cyan-400 border-2 border-cyan-400/50' 
                  : 'text-gray-400 hover:text-cyan-400'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects[selectedCategory].map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Work;