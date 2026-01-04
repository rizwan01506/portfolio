'use client';

import { useState, useEffect } from 'react';
import { FaDownload, FaEnvelope, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiReact } from 'react-icons/si';
import { personalInfo } from '@/lib/data';

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

  return (
    <section id="home" className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center pt-16 md:pt-20 px-4">
      <div className="container mx-auto relative max-w-6xl">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
            Hi there! 👋 I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            {personalInfo.name}
          </h1>

          {/* Animated Role */}
          <div className="h-16 md:h-20 mb-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-white">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            {personalInfo.tagline}
          </p>

          {/* Tech stack chips (visible, scannable) */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/70 dark:bg-slate-900/50 rounded-full shadow-sm">
              <SiReact className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">React.js</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/70 dark:bg-slate-900/50 rounded-full shadow-sm">
              <SiTailwindcss className="w-5 h-5 text-sky-500" />
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/70 dark:bg-slate-900/50 rounded-full shadow-sm">
              <SiJavascript className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/70 dark:bg-slate-900/50 rounded-full shadow-sm">
              <SiReact className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">React Native</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/70 dark:bg-slate-900/50 rounded-full shadow-sm">
              <FaNodeJs className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">25+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={personalInfo.resumeUrl}
              download
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FaEnvelope />
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative floating icons - left side */}
      <div className="absolute left-6 top-1/4 decor-icon float-1 pointer-events-none hidden md:block">
        <div className="decor-lg rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-80" aria-hidden />
      </div>
      <div className="absolute left-10 bottom-1/4 decor-icon float-2 pointer-events-none hidden md:block">
        <div className="decor-md rounded-full bg-gradient-to-br from-pink-400 to-pink-600 opacity-80" aria-hidden />
      </div>

      {/* Decorative floating icons - right side */}
      <div className="absolute right-6 top-1/3 decor-icon float-3 pointer-events-none hidden md:block">
        <div className="decor-md rounded-full bg-gradient-to-br from-blue-300 to-blue-500 opacity-80" aria-hidden />
      </div>
      <div className="absolute right-12 bottom-1/3 decor-icon float-4 pointer-events-none hidden md:block">
        <div className="decor-sm rounded-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-80" aria-hidden />
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-screen -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
    </section>
  );
}
