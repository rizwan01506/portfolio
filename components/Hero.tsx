'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, 'change', (v) => setDisplay(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [isInView, to, count]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-10 md:py-18">
      <motion.div
        className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Photo panel - shown on all breakpoints; sits above the text on mobile, right side on desktop */}
        <motion.div
          className="order-1 lg:order-2 lg:col-span-5 flex justify-center mb-10 lg:mb-0"
          variants={fadeInUp}
        >
          <motion.div
            className="relative w-40 sm:w-56 lg:w-full lg:max-w-sm"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-full lg:rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
              <Image
                src="/profile-picture.png"
                alt={personalInfo.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 224px, 384px"
              />
            </div>
            <div className="absolute -bottom-4 lg:-bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-2 lg:px-5 lg:py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-medium rounded-full shadow-lg">
              Available to join immediately
            </div>
          </motion.div>
        </motion.div>

        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Greeting row */}
          <motion.div className="mb-10" variants={fadeInUp}>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center lg:text-left">
              Hi <span aria-hidden>👋</span> my name is{' '}
              <span className="font-serif font-semibold gradient-text">{personalInfo.name}</span>.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center lg:text-left">
              I&apos;m a {personalInfo.title.toLowerCase()} from {personalInfo.location.split(',').pop()?.trim()}.
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-4"
            variants={fadeInUp}
          >
            {displayedText}
            <motion.span
              className="inline-block ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed mb-10"
            variants={fadeInUp}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="w-full flex flex-col sm:flex-row gap-4 mb-14" variants={fadeInUp}>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md hover:opacity-85 transition-opacity"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black/20 dark:border-white/20 font-medium rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <FaEnvelope className="text-sm" />
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          {/* Stats row - plain, underline style like the reference cards */}
          <motion.div className="grid grid-cols-3 gap-6 max-w-md" variants={fadeInUp}>
            {[
              { value: 6, label: 'Years Experience' },
              { value: 15, label: 'Projects Shipped' },
              { value: 4, label: 'React Native Apps' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="border-t border-black/10 dark:border-white/10 pt-3"
                whileHover={{ borderColor: 'rgba(0,0,0,0.3)' }}
              >
                <div className="font-serif text-2xl sm:text-3xl font-semibold">
                  <CountUp to={stat.value} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
