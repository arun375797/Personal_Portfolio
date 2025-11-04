import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  // Rotating text animation
  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'Problem Solver',
    'Code Enthusiast',
    'Web Developer'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="section-padding w-full z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <motion.div variants={itemVariants}>
                <motion.p
                  className="text-primary-400 font-mono text-sm sm:text-base md:text-lg mb-2 md:mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Hi, my name is
                </motion.p>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-50 mb-2 md:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Arun Thomas
                </motion.h1>
                
                {/* Animated Role Title with Typing Cursor */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 h-14 sm:h-16 md:h-20 flex items-center relative">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={currentRole}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="gradient-text"
                    >
                      {roles[currentRole]}
                      <motion.span
                        className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 lg:h-12 bg-primary-400 ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-dark-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
              >
                Specialized in <span className="text-primary-400 font-semibold">MERN Stack</span> with a strong passion for building scalable and efficient distributed systems. Driven by curiosity and a commitment to continuous learning.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4">
                <motion.a
                  href="#contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  className="btn-outline flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  <FiDownload /> Download Resume
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 sm:gap-6 pt-2 md:pt-4"
              >
                {[
                  { icon: FiGithub, href: 'https://github.com/arun375797', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arun-t37579', label: 'LinkedIn' },
                  { icon: FiMail, href: 'mailto:arun37579@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="relative order-first md:order-last"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-full max-w-sm sm:max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
                
                {/* Image container */}
                <motion.div
                  className="relative glass-effect rounded-2xl overflow-hidden border-2 border-primary-500/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Arun Thomas"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent"></div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-effect rounded-lg px-2 py-1 sm:px-4 sm:py-2"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="text-primary-400 font-mono text-xs sm:text-sm">💻 MERN Stack</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-effect rounded-lg px-2 py-1 sm:px-4 sm:py-2"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <span className="text-purple-400 font-mono text-xs sm:text-sm">🚀 Full Stack</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="hidden sm:block absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-dark-300 hover:text-primary-400 transition-colors cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <FiArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.a>
    </section>
  );
};

export default Hero;


