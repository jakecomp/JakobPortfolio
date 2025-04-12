'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Platform Engineer III',
    company: 'Fullscript',
    location: 'Remote',
    period: 'November 2023 - Present',
    description: 'Working remotely as a Platform Engineer, focusing on cloud infrastructure and developer experience improvements.'
  },
  {
    id: 2,
    type: 'work',
    title: 'Software Engineer',
    company: 'General Dynamics Mission Systems Canada',
    location: 'Victoria, BC',
    period: 'April 2021 - October 2023',
    description: 'Developed mission-critical software solutions and systems for defense and security applications.'
  },
  {
    id: 3,
    type: 'work',
    title: 'Data Engineer',
    company: 'Babcock',
    location: 'Victoria, BC',
    period: 'January 2020 - March 2021',
    description: 'Built data pipelines and analytics solutions to support operational decision-making and business intelligence.'
  },
  {
    id: 4,
    type: 'education',
    title: 'BSENG Software Engineering',
    company: 'University of Victoria',
    location: 'Victoria, BC',
    period: 'September 2019 - October 2023',
    description: 'Earned a degree in Software Engineering with a focus on software system scalability and reliability, developing expertise in designing robust, high-performance applications.'
  }
];

const Experience = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted">
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
            Experience & Education
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-foreground/80"
          >
            My professional journey through the tech landscape
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 transform md:translate-x-[-0.5px]"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              variants={fadeInUp}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline Circle */}
              <div 
                className={`absolute top-0 bg-background border-4 border-primary rounded-full w-6 h-6 ${
                  index % 2 === 0 
                    ? 'left-0 md:right-[-12px] md:left-auto' 
                    : 'left-0 md:left-[-12px]'
                }`}
              ></div>
              
              {/* Card */}
              <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-block p-3 rounded-full mb-4 ${
                  exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                }`}>
                  {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>
                <div className="mb-2 text-sm font-medium text-primary/80">{exp.period}</div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{exp.title}</h3>
                <div className="text-foreground/80 mb-3">{exp.company} • {exp.location}</div>
                <p className="text-foreground/70">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 