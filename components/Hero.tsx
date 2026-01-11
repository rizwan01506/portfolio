'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(currentRole.slice(0, displayedText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : -50, 
      y: isMobile ? 20 : 0,
      scale: isMobile ? 0.98 : 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: isMobile ? 0 : 50, 
      y: isMobile ? 20 : 0,
      scale: isMobile ? 0.98 : 0.95 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            className="lg:col-span-7 space-y-2 sm:space-y-4"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          >
            {/* Experience Badge */}
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                  6+ Years Experience
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="-mb-1 sm:mb-0">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium">
                Hi there! 👋 I'm
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight -mb-1 sm:mb-0"
              variants={itemVariants}
            >
              <span className="block gradient-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Animated Role with better spacing */}
            <motion.div
              className="min-h-[50px] sm:min-h-[80px] flex items-center -mb-1 sm:mb-0"
              variants={itemVariants}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
                {displayedText}
                <motion.span
                  className="inline-block ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 sm:pt-2"
              variants={itemVariants}
            >
              <motion.div
                className="group relative p-2 sm:p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">20+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Total Projects</div>
                </div>
              </motion.div>

              <motion.div
                className="group relative p-2 sm:p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">16+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">React.js/Next.js</div>
                </div>
              </motion.div>

              <motion.div
                className="group relative p-2 sm:p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">4+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">React Native</div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-1 sm:pt-2"
              variants={itemVariants}
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-purple-500/40 flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <FaDownload className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold text-sm hover:bg-purple-600 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgb(147, 51, 234)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Image */}
          <motion.div
            className="lg:col-span-5 flex items-center justify-center"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          >
            <div className="relative w-full max-w-md mx-auto group">
              {/* Background glow effects */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Infinite pulsing glow on hover */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl opacity-0 blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />

              {/* Main image container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden border-4 border-white/10 dark:border-slate-700/50 backdrop-blur-sm"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full z-20"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-bl-full z-20"></div>

                {/* Image with proper aspect ratio */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    whileHover={{
                      scale: [1, 1.08, 1],
                      transition: {
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Image
                      src="/professional_image.png"
                      alt={personalInfo.name}
                      fill
                      className="object-cover object-top"
                      priority
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </motion.div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900/60 via-pink-900/40 to-transparent"></div>
                </div>

                {/* Name card overlay - improved positioning and readability */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {personalInfo.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    />
                    <p className="text-base text-gray-200 font-medium">
                      Senior Frontend Engineer
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating particles - enhanced */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-purple-400/30 rounded-full blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-28 h-28 bg-pink-400/30 rounded-full blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-12 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background animated gradient orbs */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
}
