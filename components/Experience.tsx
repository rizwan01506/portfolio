'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function ExperienceItem({ exp, index, isMobile }: { exp: any; index: number; isMobile: boolean }) {
  const slideInVariants = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : (index % 2 === 0 ? -60 : 60), 
      y: isMobile ? 20 : 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        delay: isMobile ? index * 0.1 : index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className={`relative mb-8`}
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
      {/* Mobile timeline indicator */}
      <div className="flex items-start gap-4 md:gap-8">
        <div className={`bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full`}>
          <div className="mb-3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">{exp.type}</span>
            </div>

            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold mb-2">
              <FaBriefcase />
              <span>{exp.company}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Achievements - always show all items for mobile clarity */}
          <div className="space-y-3">
            {exp.achievements.map((achievement: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 15 : 30, 
      scale: isMobile ? 0.99 : 0.98 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />

          {experience.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} isMobile={isMobile} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">Want to know more about my professional journey?</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Let's Connect</a>
        </motion.div>
      </div>
    </section>
  );
}
