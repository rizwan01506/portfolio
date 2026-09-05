'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 dark:border-white/10 bg-[#f7f6f2]/95 dark:bg-[#14161a]/95 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto flex items-center justify-center sm:justify-between gap-3 sm:gap-1 px-1 sm:px-6 py-1 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-0.5 sm:gap-6 flex-nowrap">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 px-1.5 py-1.5 text-xs sm:text-sm flex-shrink-0 transition-colors ${isActive
                    ? 'font-semibold text-black dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                aria-label={link.name}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 sm:left-0 sm:right-0 -bottom-0.5 h-0.5 bg-black dark:bg-white"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center justify-center min-w-[44px] min-h-[44px] flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <FaSun className="w-4 h-4" />
          ) : (
            <FaMoon className="w-4 h-4" />
          )}
        </button>
      </div>
    </nav>
  );
}
