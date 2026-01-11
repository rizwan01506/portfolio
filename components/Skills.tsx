'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon?: IconType;
  level: number;
}

function SkillCard({ name, icon: Icon, level }: SkillCardProps) {
  return (
    <div className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <Icon className="text-3xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
          )}
          <h3 className="font-semibold text-gray-800 dark:text-white">{name}</h3>
        </div>
        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
          {level}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('Frontend');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : -60, 
      y: isMobile ? 20 : 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : 60, 
      y: isMobile ? 20 : 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 10 : 20, 
      scale: isMobile ? 0.98 : 0.96 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const categoriesMap: Record<string, typeof skills.frontend> = {
    Frontend: skills.frontend,
    Backend: skills.backend,
    Tools: skills.tools,
  };

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of modern technologies and tools for building scalable applications
          </p>

          {/* Filter buttons */}
          <motion.div
            className="mt-6 flex justify-center gap-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {(['All','Frontend','Backend','Tools'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === cat
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <div className="space-y-12">
          {filter === 'All' ? (
            <>
              {/* Frontend Skills */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                  Frontend Technologies
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={`fe-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: isMobile ? index * 0.03 : index * 0.05 }}
                    >
                      <SkillCard {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Skills */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                  Backend & Database
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={`be-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: isMobile ? index * 0.03 : index * 0.05 }}
                    >
                      <SkillCard {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Others */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                  Tools & Methodologies
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={`tools-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: isMobile ? index * 0.03 : index * 0.05 }}
                    >
                      <SkillCard {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
        >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                {filter === 'Frontend' ? 'Frontend Technologies' : filter === 'Backend' ? 'Backend & Database' : 'Tools & Methodologies'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoriesMap[filter].map((skill, index) => (
                  <motion.div
                    key={`${filter}-${index}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
