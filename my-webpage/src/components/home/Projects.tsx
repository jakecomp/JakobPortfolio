'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Island Platform',
    description: 'A comprehensive platform for streamlining cloud deployments, featuring automated scaling, monitoring, and self-healing capabilities.',
    tags: ['Kubernetes', 'Terraform', 'Go', 'GitOps'],
    image: '/images/island-platform.jpg',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
  },
  {
    id: 2,
    title: 'Cedar Analytics',
    description: 'Analytics dashboard for visualizing data from natural resource management systems, with a focus on sustainable forestry practices.',
    tags: ['React', 'D3.js', 'Node.js', 'GraphQL'],
    image: '/images/cedar-analytics.jpg',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
  },
  {
    id: 3,
    title: 'Pacific Wave API',
    description: 'RESTful API service for ocean data collection and analysis, used by research institutions across the Pacific Northwest.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: '/images/pacific-wave.jpg',
    githubUrl: 'https://github.com/',
    liveUrl: null,
  },
  {
    id: 4,
    title: 'Coastal CLI',
    description: 'A command-line interface tool for rapid development workflows, designed to integrate with multiple cloud providers.',
    tags: ['TypeScript', 'Node.js', 'AWS', 'Azure'],
    image: '/images/coastal-cli.jpg',
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
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
    <section id="projects" className="py-20 bg-background">
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
            Selected works from my journey as a developer and engineer
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
              <div className="h-48 bg-dark-forest flex items-center justify-center">
                <div className="text-white text-lg font-medium p-4 text-center">
                  {project.title}
                  <p className="text-sm text-white/60 mt-2">Image placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-foreground hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </Link>
                  {project.liveUrl && (
                    <Link 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-foreground hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
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
            href="https://github.com/"
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