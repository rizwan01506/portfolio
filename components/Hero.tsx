'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaEnvelope, FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center lg:items-start">

          {/* Right Side - Professional Image (Order first on mobile) */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 flex items-center lg:items-start justify-center lg:justify-end p-4 relative lg:pt-[80px] lg:pr-[40px]"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          >
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] aspect-square group">
              {/* Decorative rings (moved below image in z-order if needed, or kept above with pointer-events-none) */}
              <motion.div
                className="absolute -inset-4 sm:-inset-6 border-2 border-dashed border-purple-500/30 rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 sm:-inset-12 border border-pink-500/20 rounded-full pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Background glow effects */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full opacity-20 blur-3xl"
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
                className="absolute -inset-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-0 blur-3xl group-hover:opacity-40 transition-opacity duration-700"
              />

              {/* Main image container */}
              <motion.div
                className="relative h-full w-full rounded-full overflow-hidden border-4 border-white/20 dark:border-slate-700/50 backdrop-blur-sm shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Image with proper aspect ratio */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Image
                      src="/formal-profile-image.png"
                      alt={personalInfo.name}
                      fill
                      className="object-cover object-top"
                      priority
                      quality={100}
                      sizes="(max-width: 768px) 220px, (max-width: 1024px) 320px, 420px"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Floating tech icons - corners and sides */}
              {/* React - Top Right */}
              <motion.div
                className="absolute -top-4 -right-4 w-11 h-11 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-cyan-200 dark:border-cyan-900 z-30"
                animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaReact className="text-xl sm:text-2xl text-cyan-500" />
              </motion.div>

              {/* HTML5 - Right side */}
              {/* <motion.div
                className="absolute top-1/2 -translate-y-1/2 -right-5 w-9 h-9 sm:w-10 sm:h-10 bg-white dark:bg-slate-800 rounded-xl shadow-lg flex items-center justify-center border border-orange-200 dark:border-orange-900 z-30"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <FaHtml5 className="text-lg sm:text-xl text-orange-500" />
              </motion.div> */}

              {/* TypeScript - Bottom Right */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-blue-300 dark:border-blue-800 z-30"
                animate={{ y: [0, 6, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <SiTypescript className="text-lg sm:text-xl text-blue-600" />
              </motion.div>

              {/* CSS3 - Bottom Left */}
              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-blue-200 dark:border-blue-900 z-30"
                animate={{ y: [0, 6, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <FaCss3Alt className="text-lg sm:text-xl text-blue-500" />
              </motion.div>

              {/* JavaScript - Top Left */}
              <motion.div
                className="absolute -top-4 -left-4 w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-yellow-200 dark:border-yellow-800 z-30"
                animate={{ y: [0, -6, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FaJs className="text-lg sm:text-xl text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Left Side - Text Content (Order second on mobile) */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          >
            {/* Experience Badge */}
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <div className="h-4 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  6+ Years Experience
                </span>
              </div>
            </motion.div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <motion.p
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium"
                variants={itemVariants}
              >
                Hi there! <motion.span
                  className="inline-block origin-bottom-right"
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
                >👋</motion.span> I'm
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-7xl lg:text-[90px] font-black tracking-tight leading-[1.1] whitespace-nowrap"
                variants={itemVariants}
              >
                <span className="block gradient-text drop-shadow-2xl pb-2">
                  {personalInfo.name}
                </span>
              </motion.h1>
            </div>

            {/* Animated Role */}
            <motion.div
              className="min-h-[40px] sm:min-h-[60px]"
              variants={itemVariants}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white/90">
                {displayedText}
                <motion.span
                  className="inline-block ml-1 text-purple-500"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto pt-4"
              variants={itemVariants}
            >
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-bold shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ translateX: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <FaDownload className="text-lg group-hover:animate-bounce" />
                  <span className="tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap">Download Resume</span>
                </div>
              </motion.a>

              <motion.a
                href="#contact"
                className="group px-10 py-5 border border-purple-500/20 dark:border-white/10 text-purple-600 dark:text-white rounded-full font-bold transition-all duration-300 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-purple-500/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center gap-3">
                  <FaEnvelope className="text-lg group-hover:rotate-12 transition-transform" />
                  <span className="tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap">Let's Talk</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Premium Stats Cards - Overhauled */}
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
                  <div className="text-2xl sm:text-4xl font-bold gradient-text mb-1">30+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Total Projects</div>
                </div>
              </motion.div>

              <motion.div
                className="group relative p-2 sm:p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-2xl sm:text-4xl font-bold gradient-text mb-1">26+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">React.js/Next.js</div>
                </div>
              </motion.div>

              <motion.div
                className="group relative p-2 sm:p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-2xl sm:text-4xl font-bold gradient-text mb-1">4+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">React Native</div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-1 sm:pt-2"
              variants={itemVariants}
            >
              {/* <motion.a
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
              </motion.a> */}

              {/* <motion.a
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
              </motion.a> */}
            </motion.div>
          </motion.div>
            {/* <div className="w-full pt-16 sm:pt-20">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full"
                variants={itemVariants}
              >
                {[
                  { label: 'Total Projects', value: '30+', color: 'from-blue-400 to-indigo-500' },
                  { label: 'React/Next.js', value: '26+', color: 'from-purple-400 to-pink-500' },
                  { label: 'React Native', value: '4+', color: 'from-orange-400 to-red-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative flex flex-col items-center p-8 sm:p-10 rounded-[3rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-white/5 transition-all duration-500"
                    whileHover={{ y: -12, backgroundColor: "rgba(255,255,255,0.6)" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.05] rounded-[3rem] transition-opacity`} />
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 gradient-text drop-shadow-md tracking-tighter">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.4em] text-center">{stat.label}</span>

                    <div className={`absolute bottom-6 h-1 w-10 rounded-full bg-gradient-to-r ${stat.color} opacity-30 group-hover:opacity-100 transition-all duration-500`} />
                  </motion.div>
                ))}
              </motion.div>
            </div> */}
                {/* Decorative dot/line */}
          {/* </motion.div> */}
        </div>
      </motion.div>

      {/* Background animated gradient orbs */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-900/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/20 dark:bg-pink-900/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
}
