'use client';

import { projects } from '@/lib/data';
import { FaExternalLinkAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications built with modern technologies, focusing on performance, scalability, and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-purple-100">{project.role}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: any, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement: any, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {project.links.android && (
                      <a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        <FaGooglePlay />
                        Play Store
                      </a>
                    )}
                    {project.links.ios && (
                      <a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <FaAppStore />
                        App Store
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These are just a few highlights. I've worked on many more projects across web and mobile platforms.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white dark:hover:text-white transition-all duration-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
