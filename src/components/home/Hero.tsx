'use client';

import { motion } from 'framer-motion';
import RotatingTitle from './RotatingTitle';
import Image from 'next/image';

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
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
          {/* Profile Picture - Larger and on the left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary relative flex-shrink-0"
          >
            <Image 
              src="/FullSizeRender.jpeg" 
              alt="Jakob Valen" 
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
          </motion.div>
          
          {/* Name and Rotating Title - Next to profile on desktop */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-1">
                Jakob Valen
              </h1>
              <div>
                <RotatingTitle />
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 max-w-xl mb-8"
              >
                Passionate engineer currently developing platform as a service tooling at Fullscript
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
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
            </motion.div>
          </div>
        </div>
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