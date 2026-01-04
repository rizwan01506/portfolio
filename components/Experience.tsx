'use client';

import { experience } from '@/lib/data';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>

          {experience.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content Card */}
              <div
                className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-full">
                      {exp.type}
                    </span>
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

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to know more about my professional journey?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
