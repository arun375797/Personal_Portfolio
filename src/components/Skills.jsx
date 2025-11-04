import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiGitBranch, 
  FiLayout,
  FiServer,
  FiBox
} from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Authentication', level: 80 },
        { name: 'Microservices', level: 70 },
      ],
    },
    {
      icon: FiDatabase,
      title: 'Database & Storage',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 85 },
        { name: 'Redis', level: 70 },
        { name: 'PostgreSQL', level: 65 },
      ],
    },
    {
      icon: FiGitBranch,
      title: 'Tools & Version Control',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'npm/yarn', level: 90 },
      ],
    },
    {
      icon: FiLayout,
      title: 'UI/UX & Design',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Responsive Design', level: 90 },
        { name: 'UI Components', level: 85 },
        { name: 'Animations', level: 80 },
        { name: 'User Experience', level: 85 },
      ],
    },
    {
      icon: FiBox,
      title: 'Other Skills',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Agile/Scrum', level: 80 },
        { name: 'Testing', level: 75 },
        { name: 'CI/CD', level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding" ref={ref}>
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
            02. My Expertise
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card group"
              whileHover={{ y: -10 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-dark-50">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-dark-200 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-16 glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'TypeScript',
              'Tailwind CSS', 'Redux', 'Git', 'REST API', 'HTML5', 'CSS3',
              'Framer Motion', 'Vite', 'Webpack', 'JWT', 'Socket.io', 'Redis'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white/5 border border-primary-500/30 rounded-lg text-dark-200 font-medium hover:bg-primary-500/20 hover:border-primary-500 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;


