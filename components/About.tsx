"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaAward,
  FaShieldAlt,
  FaCogs,
} from 'react-icons/fa';
import { about } from '@/lib/data';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Data
  const professionalSummary = about.summary;

  const coreExpertise = [
    {
      icon: FaCode,
      title: "Component-Driven Architecture",
      desc: "Building scalable, reusable UI components with React.js",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      desc: "Code-splitting, lazy loading, and caching strategies",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Authentication",
      desc: "JWT, RBAC, protected routes, and session management",
    },
    {
      icon: FaCogs,
      title: "State Management",
      desc: "Redux, Redux Toolkit, React Query for efficient data flow",
    },
  ];

  const keyHighlights = about.highlights;

  // Animation variants - Optimized for smooth scrolling
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: isMobile ? 15 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Smooth ease-out
        opacity: { duration: 0.6 }
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.98,
      y: isMobile ? 10 : 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // Smooth ease-out
        opacity: { duration: 0.5 },
        scale: { duration: 0.6 }
      }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text font-serif">About Me</span>
          </h2>

          <motion.div
            className="w-16 sm:w-20 h-px bg-black/20 dark:bg-white/20 mx-auto mb-4 sm:mb-6 max-w-full"
            initial={{ width: 0 }}
            whileInView={{ width: isMobile ? 64 : 80 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Senior Frontend Engineer specializing in React.js, React Native, and modern web technologies
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          className="bg-transparent rounded-md p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 border border-black/10 dark:border-white/10 w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          whileHover={{ y: -4 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-1 h-8 sm:h-10 bg-black/90 dark:bg-white/30"></div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Professional Summary</h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {professionalSummary}
          </p>
        </motion.div>

        {/* Core Expertise */}
        <motion.div
          className="mb-8 sm:mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 sm:h-10 bg-black/90 dark:bg-white/30"></div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Core Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreExpertise.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-5 sm:p-6 rounded-md bg-transparent border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="text-black dark:text-white text-lg sm:text-xl" />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {expertise.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {expertise.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="bg-transparent rounded-md p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 border border-black/10 dark:border-white/10 w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-1 h-8 sm:h-10 bg-black/90 dark:bg-white/30"></div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Key Highlights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-md hover:bg-black/[0.03] dark:hover:bg-white/5 transition-all duration-300 group w-full min-w-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ x: isMobile ? 0 : 5 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <motion.div
                  className="mt-0.5 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCheckCircle className="text-primary-500 dark:text-primary-400 text-sm sm:text-base md:text-lg" />
                </motion.div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-1 min-w-0 break-words">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Quote */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div
            className="relative p-6 sm:p-8 md:p-10 bg-transparent rounded-md border-l-2 border-black/30 dark:border-white/30 overflow-hidden w-full"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Decorative quote marks */}
            <div className="absolute top-4 left-4 sm:left-6 text-5xl sm:text-7xl text-black/10 dark:text-white/10 font-serif leading-none">&ldquo;</div>
            <div className="absolute bottom-4 right-4 sm:right-6 text-5xl sm:text-7xl text-black/10 dark:text-white/10 font-serif leading-none">&rdquo;</div>

            <div className="relative z-10 text-center">
              <p className="font-serif text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                &ldquo;I believe in writing clean, maintainable code and building solutions that make a real impact. My focus is always on delivering exceptional user experiences through performance optimization, scalable architecture, and collaborative teamwork.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-8 sm:w-12 bg-black/20 dark:bg-white/20"></div>
                <FaAward className="text-primary-600 dark:text-primary-400 text-sm sm:text-base" />
                <div className="h-px w-8 sm:w-12 bg-black/20 dark:bg-white/20"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
