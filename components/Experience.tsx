'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experience, ExperienceEntry } from '@/lib/data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function ExperienceItem({ exp, index, isMobile }: { exp: ExperienceEntry; index: number; isMobile: boolean }) {
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
        <div className="bg-transparent p-6 md:p-8 rounded-md border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-300 w-full">
          <div className="mb-3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
              <span className="px-3 py-1 border border-black/15 dark:border-white/15 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full">{exp.type}</span>
            </div>

            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold mb-1">
              <FaBriefcase />
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-2"
                >
                  {exp.company}
                </a>
              ) : (
                <span>{exp.company}</span>
              )}
            </div>

            {exp.summary && (
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic mb-2">{exp.summary}</p>
            )}

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
                <div className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
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
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 gradient-text">Work Experience</h2>
          <div className="w-20 h-px bg-black/20 dark:bg-white/20 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and achievements
          </p>
        </motion.div>

        <div className="relative">
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
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:opacity-85 transition-opacity duration-300"
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
