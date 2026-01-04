'use client';

import { skills } from '@/lib/data';
import { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon?: IconType;
  level: number;
}

function SkillCard({ name, icon: Icon, level }: SkillCardProps) {
  return (
    <div className="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {Icon && (
            <Icon className="text-3xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
          )}
          <h3 className="font-semibold text-gray-800 dark:text-white">{name}</h3>
        </div>
        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
          {level}%
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of modern technologies and tools for building scalable applications
          </p>
        </div>

        <div className="space-y-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              Frontend Technologies
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              Backend & Database
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.backend.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              Tools & Methodologies
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.tools.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
