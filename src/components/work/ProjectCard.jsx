// src/components/work/ProjectCard.jsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse movement animation setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8.5deg", "-8.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8.5deg", "8.5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group"
    >
      <div className="bg-[#112240] rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500">
        {/* Project Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              scale: isHovered ? 1 : 1,
              transition: "scale 0.4s ease-out"
            }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 bg-[#112240]">
          <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1 * index,
                  duration: 0.3
                }}
                className="px-3 py-1 text-xs bg-cyan-400/5 text-cyan-400/80 rounded-full
                         hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* View Live Button */}
          <div className="flex justify-end">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-cyan-400/20 backdrop-blur-sm 
                       px-6 py-2 rounded-lg text-cyan-400 hover:bg-cyan-400/30 
                       transition-all duration-300"
            >
              View Live
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div
        className={`
          absolute -inset-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-purple-500/0
          rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500
          -z-10
        `}
      />
    </motion.div>
  );
};

export default ProjectCard;