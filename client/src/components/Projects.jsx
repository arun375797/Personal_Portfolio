import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode, FiUsers, FiShoppingCart, FiMic } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Code Vault',
      category: 'web',
      description: 'A comprehensive learning platform for developers to master MERN interviews with confidence. Features practical mock tests, progress analytics, and a JavaScript code runner.',
      image: '/projects/code-vault.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      features: [
        'Practical mock tests for interview preparation',
        'Progress tracking and analytics',
        'JavaScript code runner (online compiler)',
        'Admin updates and notices system',
        'Google authentication integration'
      ],
      github: 'https://github.com/arun375797',
      demo: 'https://mern-question-bank.onrender.com',
      color: 'from-blue-500 to-purple-500',
      icon: FiCode,
    },
    {
      title: 'ICT Internship Portal',
      category: 'web',
      description: 'Student internship management platform with course selection and admin restriction features.',
      image: '/projects/ict-portal.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Course selection with admin restriction',
        'Student internship management',
        'Admin panel for course management'
      ],
      github: 'https://github.com/arun375797',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
      icon: FiUsers,
    },
    {
      title: 'Audio-to-Text Transcription',
      category: 'ai',
      description: 'Web application for converting audio recordings into text format using AI-powered speech recognition with high accuracy.',
      image: '/projects/speech-to-text.jpg',
      technologies: ['React', 'AI/ML', 'Speech Recognition API'],
      features: [
        'Real-time audio to text conversion',
        'High accuracy speech recognition',
        'Support for live transcription',
        'Multiple language support'
      ],
      github: 'https://github.com/arun375797',
      demo: 'https://speechtotext-frontend-3kse-onrender.com',
      color: 'from-purple-500 to-pink-500',
      icon: FiMic,
    },
    {
      title: 'E-commerce Website',
      category: 'web',
      description: 'Full-stack e-commerce platform with user authentication, admin panel, product management, and sales analytics.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      features: [
        'User login, Admin login, Coupon management',
        'Payment & Wallet management',
        'Product, Category, User management',
        'Sales management with Graph',
        'Order management'
      ],
      github: 'https://github.com/arun375797',
      demo: 'https://shop-me.shop/',
      color: 'from-orange-500 to-red-500',
      icon: FiShoppingCart,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI/ML' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span
            className="text-primary-400 font-mono text-sm md:text-base mb-4 block"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            04. My Work
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass-effect text-dark-300 hover:text-primary-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                className="card group overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-dark-800 to-dark-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon size={40} className="text-white" />
                    </motion.div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub size={20} />
                      </motion.a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-primary-500/30 rounded-full text-xs text-dark-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <FiGithub size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <FiExternalLink size={18} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/arun375797"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;


