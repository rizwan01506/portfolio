'use client';

import { experience } from '@/lib/data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  return (
    <div className={`relative mb-8`}>
      {/* Mobile timeline indicator */}
      <div className="flex items-start gap-4 md:gap-8">
        <div className={`bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
          <div className="mb-3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">{exp.type}</span>
            </div>

            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold mb-2">
              <FaBriefcase />
              <span>{exp.company}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Achievements - always show all items for mobile clarity */}
          <div className="space-y-3">
            {exp.achievements.map((achievement: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 gradient-text">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />

          {experience.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Want to know more about my professional journey?</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
