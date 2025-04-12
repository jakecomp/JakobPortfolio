'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaDatabase, FaCircle } from 'react-icons/fa';

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
            I'm a passionate engineer with a love for building scalable systems and reliable solutions. I live on beautiful Vancouver Island, and I love creating tools that spark joy for developers.
          </motion.p>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-10 text-foreground text-center"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Programming Languages */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg transition-shadow"
          >
            <div className="flex items-center gap-3 bg-muted p-4 rounded-lg mb-4 shadow-sm">
              <div className="text-primary text-2xl">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 pl-3">
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Go</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Ruby</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Python</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">C++</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">C</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Java</span>
              </div>
            </div>
          </motion.div>

          {/* Platform Tools */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg transition-shadow"
          >
            <div className="flex items-center gap-3 bg-muted p-4 rounded-lg mb-4 shadow-sm">
              <div className="text-primary text-2xl">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Platform Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 pl-3">
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Azure</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Vercel</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Helm</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Kubernetes</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">GitLab CI/CD</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">GitHub Actions</span>
              </div>
            </div>
          </motion.div>

          {/* AI Tools */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg transition-shadow"
          >
            <div className="flex items-center gap-3 bg-muted p-4 rounded-lg mb-4 shadow-sm">
              <div className="text-primary text-2xl">
                <FaRobot />
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Tools</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 pl-3">
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Cursor</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">PyTorch</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">n8n</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Keras</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">SageMaker</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">MLFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">KubeFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Warp CLI</span>
              </div>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg transition-shadow"
          >
            <div className="flex items-center gap-3 bg-muted p-4 rounded-lg mb-4 shadow-sm">
              <div className="text-primary text-2xl">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Databases</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 pl-3">
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">MySQL</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Postgres</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">MongoDB</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">Redis</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">ElasticSearch</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCircle className="text-primary text-xs" />
                <span className="text-foreground/70">SQLite</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 