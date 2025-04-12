'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Senior Platform Engineer',
    company: 'West Coast Tech',
    location: 'Victoria, BC',
    period: '2021 - Present',
    description: 'Lead the development of cloud infrastructure and devops automation, improving deployment speed by 60% and reducing costs by 25%.'
  },
  {
    id: 2,
    type: 'work',
    title: 'Software Engineer',
    company: 'Island Innovations',
    location: 'Nanaimo, BC',
    period: '2018 - 2021',
    description: 'Developed scalable backend services using Node.js, created CI/CD pipelines, and optimized database performance.'
  },
  {
    id: 3,
    type: 'work',
    title: 'Junior Developer',
    company: 'Pacific Digital Solutions',
    location: 'Vancouver, BC',
    period: '2016 - 2018',
    description: 'Built web applications using JavaScript frameworks, implemented responsive designs, and collaborated with UX designers.'
  },
  {
    id: 4,
    type: 'education',
    title: 'MSc Computer Science',
    company: 'University of Victoria',
    location: 'Victoria, BC',
    period: '2014 - 2016',
    description: 'Specialized in distributed systems and cloud computing. Thesis on optimizing containerized microservices deployment.'
  },
  {
    id: 5,
    type: 'education',
    title: 'BSc Computer Science',
    company: 'University of British Columbia',
    location: 'Vancouver, BC',
    period: '2010 - 2014',
    description: 'Focus on software engineering, algorithms, and database systems. Graduated with honors.'
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
            My professional journey through the tech landscape of British Columbia
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