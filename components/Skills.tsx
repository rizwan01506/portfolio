'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon?: IconType;
}

function SkillCard({ name, icon: Icon }: SkillCardProps) {
  return (
    <div className="group p-4 bg-transparent rounded-md border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-300 flex flex-col items-center justify-center text-center gap-2 h-full w-full min-h-[90px] max-h-[90px]">
      {Icon ? (
        <Icon className="text-2xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
      ) : (
        <div className="w-7 h-7 border border-black/20 dark:border-white/20 rounded-md flex items-center justify-center flex-shrink-0">
          <span className="font-extrabold text-xs">{name.charAt(0)}</span>
        </div>
      )}
      <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-xs leading-tight">{name}</h3>
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

  const categoriesMap: Record<string, SkillCardProps[]> = {
    Frontend: skills.frontend,
    Backend: skills.backend,
    Tools: skills.tools,
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-px bg-black/20 dark:bg-white/20 mx-auto"></div>
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
            {(['All', 'Frontend', 'Backend', 'Tools'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === cat
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-transparent border border-black/15 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:border-black/40 dark:hover:border-white/40'
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
                <h3 className="font-serif text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-1 h-8 bg-black/30 dark:bg-white/30"></span>
                  Frontend Technologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.frontend.map((skill, index) => (
                    <motion.div
                      key={`fe-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: isMobile ? index * 0.03 : index * 0.05 }}
                      className="h-full"
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
                <h3 className="font-serif text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-1 h-8 bg-black/30 dark:bg-white/30"></span>
                  Backend & Database
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.backend.map((skill, index) => (
                    <motion.div
                      key={`be-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: isMobile ? index * 0.03 : index * 0.05 }}
                      className="h-full"
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
                <h3 className="font-serif text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                  <span className="w-1 h-8 bg-black/30 dark:bg-white/30"></span>
                  Tools & Methodologies
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={`tools-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: isMobile ? index * 0.03 : index * 0.05 }}
                      className="h-full"
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
              <h3 className="font-serif text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <span className="w-1 h-8 bg-black/90 dark:bg-white/30"></span>
                {filter === 'Frontend' ? 'Frontend Technologies' : filter === 'Backend' ? 'Backend & Database' : 'Tools & Methodologies'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoriesMap[filter].map((skill: SkillCardProps, index: number) => (
                  <motion.div
                    key={`${filter}-${index}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                    className="h-full"
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
