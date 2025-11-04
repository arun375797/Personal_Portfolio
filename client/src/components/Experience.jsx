import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Full Stack Developer (MERN) Intern',
      company: 'Ladder7 Nextstep Solutions',
      location: 'Remote',
      period: 'Aug 2025 - Present',
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Collaborating with the development team on real-world projects',
        'Working on feature implementation, bug fixing, and optimization',
        'Building testing and deploying projects following industry best practices',
        'Learning project workflow using Git/GitHub for version control',
        'Working on frontend development with React-based frameworks and database management'
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'BROTOTYPE',
      location: 'Kerala, India',
      period: 'July 2024 - Present',
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Designed, developed, and deployed full-stack web applications using the MERN stack',
        'Built intuitive, responsive user interfaces using React.js',
        'Developed robust backend with Node.js and Express.js, integrating MongoDB for data management',
        'Created Admin Panel for managing products, categories, orders, and users',
        'Designed on-admin dashboard with controls for managing products, orders, and analytics',
        'Enabled real-time data visualization and analytics for better insights',
        'Collaborated with functional teams to gather requirements and deliver projects within deadlines'
      ],
    },
    {
      title: 'ICT Internship',
      company: 'ICT Academy',
      location: 'Kerala, India',
      period: 'Dec 2022 - May 2024',
      color: 'from-green-500 to-emerald-500',
      responsibilities: [
        'Learned essential web development and the basic and advanced programming concepts',
        'Worked with React.js and Node.js for building full-stack applications',
        'Gained hands-on experience in project development and deployment'
      ],
    },
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-dark-800/50" ref={ref}>
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
            03. My Journey
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ top: 0 }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div
                  className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="card group">
                    {/* Company Badge */}
                    <motion.div
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${exp.color} rounded-lg mb-4`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiBriefcase className="text-white" />
                      <span className="text-white font-semibold">{exp.company}</span>
                    </motion.div>

                    {/* Job Title */}
                    <h3 className="text-2xl font-bold text-dark-50 mb-3">
                      {exp.title}
                    </h3>

                    {/* Meta Info */}
                    <div className={`flex flex-wrap gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="flex items-center gap-2 text-dark-300">
                        <FiCalendar className="text-primary-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 text-dark-300">
                        <FiMapPin className="text-purple-400" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 text-dark-200 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <span className={`text-primary-400 mt-1 ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-1'}`}>
                            ▹
                          </span>
                          <span className={index % 2 === 0 ? 'order-1 md:order-2' : 'order-2'}>
                            {resp}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full border-4 border-dark-900 z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Spacer for the other column */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 glass-effect rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { course: 'SSLC', institution: 'Kerala University', year: '2015-2016' },
              { course: 'PLUS TWO', institution: 'Kerala University', year: '2016-2018' },
              { course: 'B.Com Computer Application', institution: 'Kerala University', year: '2018-2021' },
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold text-dark-50 mb-2">{edu.course}</h4>
                <p className="text-dark-300 mb-1">{edu.institution}</p>
                <p className="text-primary-400 font-semibold">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;


