'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects, Project } from '@/lib/data';
import { FaExternalLinkAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';

export default function Projects() {
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
      y: isMobile ? 20 : 20, 
      scale: isMobile ? 0.98 : 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
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
      y: isMobile ? 20 : 20, 
      scale: isMobile ? 0.98 : 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
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

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-20 h-px bg-black/20 dark:bg-white/20 mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications built with modern technologies, focusing on performance, scalability, and user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project: Project, index) => (
            <motion.div
              key={index}
              className="group h-full flex flex-col bg-transparent rounded-md border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-300 overflow-hidden"
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
              transition={{ delay: isMobile ? index * 0.05 : index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-black/10 dark:border-white/10">
                <h3 className="font-serif text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-black/15 dark:border-white/15 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-gray-500 dark:text-gray-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex flex-wrap gap-3 pt-4 mt-auto border-t border-black/10 dark:border-white/10">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {project.links.android && (
                      <a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm transition-opacity hover:opacity-90"
                        style={{ backgroundColor: '#01875F' }}
                      >
                        <FaGooglePlay />
                        Play Store
                      </a>
                    )}
                    {project.links.ios && (
                      <a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm transition-opacity hover:opacity-90"
                        style={{ backgroundColor: '#000000' }}
                      >
                        <FaAppStore />
                        App Store
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These are just a few highlights. I&apos;ve worked on many more projects across web and mobile platforms.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 border border-black/20 dark:border-white/20 rounded-md font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
