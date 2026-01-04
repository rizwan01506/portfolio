'use client';

import { about } from '@/lib/data';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {about.summary}
            </p>

            <div className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                >
                  <FaCheckCircle className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-700 dark:text-gray-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-l-4 border-purple-600">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "I believe in writing clean, maintainable code and building solutions that make a real impact. My focus is always on delivering exceptional user experiences through performance optimization and scalable architecture."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
