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
  FaGraduationCap
} from 'react-icons/fa';

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
  const professionalSummary = "Frontend Developer with 6+ years of experience designing, developing, and maintaining high-performance web and mobile applications using React.js, React Native, TypeScript, JavaScript, Redux, and Node.js. Strong expertise in component-driven architecture, reusable UI components, REST API integration, state management, performance optimization, responsive design, and scalable frontend architecture. Proven track record of delivering production-ready Android and iOS applications, reducing application load time, improving code quality, and collaborating effectively within Agile/Scrum development environments.";

  const coreExpertise = [
    {
      icon: FaCode,
      title: "Component-Driven Architecture",
      desc: "Building scalable, reusable UI components with React.js",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      desc: "Code-splitting, lazy loading, and caching strategies",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Authentication",
      desc: "JWT, RBAC, protected routes, and session management",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: FaCogs,
      title: "State Management",
      desc: "Redux, Redux Toolkit, React Query for efficient data flow",
      gradient: "from-indigo-500 to-indigo-600"
    },
  ];

  const keyHighlights = [
    "6+ years of professional experience in frontend development with React.js and React Native",
    "Expert in building component-driven architectures and reusable UI components",
    "Strong focus on performance optimization using React Query, code-splitting, and lazy loading",
    "Delivered production-ready Android and iOS applications published on Play Store and App Store",
    "Led UI migration from Chakra UI to Tailwind CSS, reducing bundle size and improving page load performance",
    "Implemented secure role-based authentication, protected routes, and session management",
    "Integrated multiple payment gateways (PayPal, Stripe, Razorpay) with automated email notifications",
    "Experience mentoring junior developers, conducting code reviews, and promoting best practices",
    "Collaborative team player in Agile/Scrum environments using Jira and GitHub"
  ];

  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "BRCM College of Engineering & Technology",
    location: "Haryana, India",
    period: "2021-2024"
  };

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
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800/50 overflow-x-hidden">
      <div className="container mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>

          <motion.div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-4 sm:mb-6 max-w-full"
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
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl mb-8 sm:mb-10 border border-gray-200 dark:border-slate-700 w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          whileHover={{ y: -4 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Professional Summary</h3>
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
            <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Core Expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreExpertise.map((expertise, index) => {
              const Icon = expertise.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-5 sm:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${expertise.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
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
          className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl mb-8 sm:mb-10 border border-gray-200 dark:border-slate-700 w-full"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Key Highlights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
            {keyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/10 dark:hover:to-pink-900/10 transition-all duration-300 group w-full min-w-0"
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
                  <FaCheckCircle className="text-green-500 text-sm sm:text-base md:text-lg" />
                </motion.div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-1 min-w-0 break-words">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Quote Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Education Card */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-200 dark:border-purple-800 w-full min-w-0"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
            whileHover={{ scale: 1.02, y: -4 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                <FaGraduationCap className="text-xl sm:text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">Education</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{education.period}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400">
                {education.degree}
              </h4>
              <p className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold">
                {education.field}
              </p>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {education.institution}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {education.location}
              </p>
            </div>
          </motion.div>

          {/* Professional Quote */}
          <motion.div
            className="relative w-full min-w-0"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              className="relative h-full p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-2xl border-l-4 border-purple-600 shadow-xl overflow-hidden w-full"
              whileHover={{ scale: 1.02, borderLeftWidth: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative quote marks */}
              <div className="absolute top-4 left-4 sm:left-6 text-5xl sm:text-7xl text-purple-200 dark:text-purple-800 opacity-30 font-serif leading-none">"</div>
              <div className="absolute bottom-4 right-4 sm:right-6 text-5xl sm:text-7xl text-pink-200 dark:text-pink-800 opacity-30 font-serif leading-none">"</div>

              {/* Floating decorative element */}
              <motion.div
                className="absolute top-1/2 right-4 sm:right-8 w-16 sm:w-20 h-16 sm:h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-10 blur-2xl"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10 text-center">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed font-medium mb-4">
                  "I believe in writing clean, maintainable code and building solutions that make a real impact. My focus is always on delivering exceptional user experiences through performance optimization, scalable architecture, and collaborative teamwork."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
                  <FaAward className="text-purple-600 dark:text-purple-400 text-sm sm:text-base" />
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-pink-600 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
