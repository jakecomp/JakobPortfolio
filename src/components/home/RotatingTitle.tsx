'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  { text: 'Platform Engineer', icon: ' ☁️' },
  { text: 'Software Engineer', icon: ' </>' },
  { text: 'AI Enthusiast', icon: ' ✨' },
  { text: 'Bean Water Addict', icon: ' ☕' },
  { text: 'Dev Tools Enthusiast', icon: ' 🛠️' }
];

const RotatingTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 relative mb-6 md:mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full text-lg md:text-2xl text-primary font-medium md:text-left"
        >
          {titles[currentIndex].text}
          <span className={`font-bold ${currentIndex === 1 ? 'text-white' : ''}`}>
            {titles[currentIndex].icon}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTitle; 