import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiZap, FiUsers, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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

  const highlights = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiZap,
      title: 'Performance',
      description: 'Optimizing for speed, scalability, and efficiency',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'Team player with strong communication skills',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth',
      description: 'Continuous learning and adapting to new technologies',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50" ref={ref}>
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
            01. About Me
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Who <span className="gradient-text">I Am</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-dark-200 text-lg leading-relaxed">
              I'm a <span className="text-primary-400 font-semibold">Full Stack Developer</span> based in Pathanamthitta, Kerala, with a strong passion for building scalable and efficient distributed systems. 
            </p>
            <p className="text-dark-200 text-lg leading-relaxed">
              Driven by curiosity and a commitment to continuous learning, I specialize in designing and developing full-stack applications with a focus on <span className="text-purple-400 font-semibold">clean, readable, and maintainable code</span>.
            </p>
            <p className="text-dark-200 text-lg leading-relaxed">
              Skilled in solving complex problems and optimizing systems for <span className="text-pink-400 font-semibold">performance and scalability</span>, I take pride in delivering user-friendly solutions that meet real-world needs.
            </p>
            <p className="text-dark-200 text-lg leading-relaxed">
              I've completed my <span className="text-primary-400 font-semibold">SSLC</span> and <span className="text-primary-400 font-semibold">Plus Two</span> from Kerala University, and a <span className="text-primary-400 font-semibold">Bachelor's Degree in B.Com Computer Application (2018-2021)</span> from Kerala University, continuously expanding my knowledge in the ever-evolving tech landscape.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-6">Quick Stats</h3>
            
            <div className="space-y-4">
              {[
                { label: 'Experience', value: '2+ Years', icon: '💼' },
                { label: 'Projects Completed', value: '15+', icon: '🚀' },
                { label: 'Technologies', value: '10+', icon: '⚡' },
                { label: 'Happy Clients', value: '5+', icon: '😊' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="flex items-center gap-3 text-dark-200">
                    <span className="text-2xl">{stat.icon}</span>
                    {stat.label}
                  </span>
                  <span className="text-primary-400 font-bold text-xl">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="card group cursor-pointer"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <highlight.icon size={28} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-dark-50">{highlight.title}</h3>
              <p className="text-dark-300">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;


