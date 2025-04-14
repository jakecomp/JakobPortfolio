'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-16 pb-8 relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/botanical_beach.jpeg"
          alt="Botanical Beach, Vancouver Island"
          fill
          style={{ objectFit: 'cover' }}
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-accent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-white/90"
          >
            Want to nerd out about tech, share your favourite dev tools, pair up on a new project, or just feel like saying hello? Feel free to email me, and I&apos;ll get back to you as soon as I can.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-forest/70 p-10 rounded-lg shadow-lg text-center"
          >
            <a 
              href="mailto:jakobvalen9@gmail.com?subject=Hello%20from%20your%20portfolio%20site" 
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-md transition-colors font-medium"
            >
              <FaPaperPlane className="mr-2" />
              Send Email
            </a>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/80 backdrop-blur-sm py-2 px-4 rounded-md bg-dark-forest/40 inline-block">
                Or copy my email address: <span className="font-medium text-white">jakobvalen9@gmail.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 