'use client';

import { motion } from 'framer-motion';
import RotatingTitle from './RotatingTitle';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16"
      style={{
        background: `linear-gradient(to bottom, rgba(30, 39, 41, 0.8), rgba(48, 78, 80, 0.6)), 
                    radial-gradient(circle at 80% 20%, var(--primary), transparent 60%),
                    radial-gradient(circle at 20% 80%, var(--secondary), transparent 50%)`
      }}
    >
      {/* Decorative elements suggesting mountains/trees/waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{ 
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 70% 50%, 40% 20%, 20% 60%, 0% 25%)',
        opacity: 0.2
      }}></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Jakob Valen
          </h1>
          <RotatingTitle />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8"
        >
          Passionate engineer currently developing platform as a service tooling at Fullscript
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="#about" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            Learn More
          </a>
          <a 
            href="#projects" 
            className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white/60"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 