// src/pages/Home.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import SectionWrapper from '../components/common/SectionWrapper';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div 
      ref={containerRef} 
      className="bg-[#0a192f] min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="min-h-screen">
          <SectionWrapper index={0}>
            <motion.div 
              style={{
                scale: useTransform(scrollYProgress, [0, 0.3], [1, 0.95]),
              }}
            >
              <Hero />
            </motion.div>
          </SectionWrapper>
        </section>

        {/* About Section */}
        <section className="min-h-screen">
          <SectionWrapper index={1}>
            <motion.div
              initial={{ rotateX: 10, scale: 0.95 }}
              whileInView={{ 
                rotateX: 0, 
                scale: 1,
              }}
              viewport={{ 
                once: true,
                amount: 0.4 // Increased amount for earlier trigger
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              style={{
                transformPerspective: '1000px',
              }}
            >
              <About />
            </motion.div>
          </SectionWrapper>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen">
          <SectionWrapper index={2}>
            <motion.div
              initial={{ rotateX: 10, scale: 0.95 }}
              whileInView={{ 
                rotateX: 0, 
                scale: 1,
              }}
              viewport={{ 
                once: true,
                amount: 0.4
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              style={{
                transformPerspective: '1000px',
              }}
            >
              <Contact />
            </motion.div>
          </SectionWrapper>
        </section>
      </div>
    </div>
  );
};

export default Home;