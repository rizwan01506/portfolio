'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon, FaHome, FaUser, FaCode, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home', href: '#home', icon: FaHome },
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Skills', href: '#skills', icon: FaCode },
  { name: 'Experience', href: '#experience', icon: FaBriefcase },
  { name: 'Projects', href: '#projects', icon: FaFolderOpen },
  { name: 'Contact', href: '#contact', icon: FaEnvelope },
];

export default function BottomNavigation() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit px-2">
      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 overflow-x-auto scrollbar-hide">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href.substring(1);
          
          return (
            <a
              key={link.name}
              href={link.href}
              className={`relative flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 rounded-full transition-all duration-300 flex-shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-110'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
              aria-label={link.name}
              title={link.name}
            >
              <Icon className="w-4 h-4" />
              {isActive && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              )}
            </a>
          );
        })}
        
        {/* Divider */}
        <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-gray-700 mx-0.5 sm:mx-1 flex-shrink-0"></div>
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex-shrink-0"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <FaSun className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <FaMoon className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>
    </nav>
  );
}

