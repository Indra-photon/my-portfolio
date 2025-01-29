// src/components/home/About.jsx
import { motion } from 'framer-motion';
import DynamicBackground from './DynamicBackground';
import { Github, Globe, Database, Server } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React.js", "JavaScript", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      category: "Tools & Version Control",
      icon: <Github className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "VS Code", "Postman", "Docker"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 20,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0a192f] py-20">
      <DynamicBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              I'm a Full Stack Developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building responsive full-stack web applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="bg-dark-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-cyan-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-cyan-400/10 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-cyan-400 text-xl mb-1 text-center"
        >
          If you have any idea or tech related problems in your business, ping me up and lets work together to find solutions
          
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;