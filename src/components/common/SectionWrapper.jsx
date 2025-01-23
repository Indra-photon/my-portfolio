// src/components/common/SectionWrapper.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SectionWrapper = ({ children, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2, // 20% of the element needs to be in view
    margin: "0px 0px -200px 0px" // negative margin to trigger earlier
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        y: 80
      }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 80
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;