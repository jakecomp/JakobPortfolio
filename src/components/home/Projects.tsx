'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'GameStonk',
    description: 'A Rails Day Trading Stock Application that allows users to track, analyze, and simulate trading of stocks in real-time.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'APIs', 'Work in Progress 🚧'],
    image: '/images/GameStonk.jpeg',
    githubUrl: 'https://github.com/jakecomp/GameStonk',
  },
  {
    id: 2,
    title: 'SolarSystem Mapper',
    description: 'A beautiful visualization of the solar system with live orbits and informative events about the planets and sun.',
    tags: ['JavaScript', 'Three.js', 'WebGL', 'HTML/CSS', 'Work in Progress 🚧'],
    image: '/images/SolarSystems.jpeg',
    githubUrl: 'https://github.com/',
  },
];

const Projects = () => {
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
    <section id="projects" className="py-20 pb-12 bg-background">
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
            Projects
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-foreground/80"
          >
            A few fun projects I work away on the side
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="bg-muted rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-dark-forest/30 hover:bg-dark-forest/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        tag.includes('Work in Progress') 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.id === 1 && (
                    <Link 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-foreground hover:text-primary transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/jakecomp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
          >
            <FaGithub className="mr-2" />
            See more on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 