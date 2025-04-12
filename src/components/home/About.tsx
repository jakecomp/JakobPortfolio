'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaBrain } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-foreground/80"
          >
            I'm a passionate engineer with a love for building scalable systems and elegant solutions.
            Based on Vancouver Island, I bring a west coast perspective to software development—calm, 
            thoughtful, and connected to nature.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Skill Card 1 */}
          <motion.div
            variants={fadeInUp}
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-primary text-3xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Software Engineering</h3>
            <p className="text-foreground/70">
              Crafting clean, efficient, and maintainable code that solves real-world problems.
            </p>
          </motion.div>

          {/* Skill Card 2 */}
          <motion.div
            variants={fadeInUp}
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-primary text-3xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Platform Engineering</h3>
            <p className="text-foreground/70">
              Building robust infrastructure and platforms that empower development teams.
            </p>
          </motion.div>

          {/* Skill Card 3 */}
          <motion.div
            variants={fadeInUp}
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-primary text-3xl mb-4">
              <FaBrain />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">AI & Machine Learning</h3>
            <p className="text-foreground/70">
              Exploring the frontier of what's possible with artificial intelligence and machine learning.
            </p>
          </motion.div>

          {/* Skill Card 4 */}
          <motion.div
            variants={fadeInUp}
            className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-primary text-3xl mb-4">
              <FaTools />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Dev Tools</h3>
            <p className="text-foreground/70">
              Creating and optimizing developer tools that enhance productivity and joy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 