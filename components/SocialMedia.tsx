'use client';

import { socialLinks } from '@/lib/data';

export default function SocialMedia() {
  return (
    <section id="socialmedia" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find me on these platforms or download my resume
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                download={social.name === 'Download Resume' ? true : undefined}
                aria-label={social.name}
                style={{ transitionDelay: `${index * 60}ms` }}
                className="social-card group relative overflow-hidden bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl shadow-lg transition-all duration-300 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                {/* Background Gradient on Hover (layered behind content) */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 rounded-xl"
                  style={{ background: social.color }}
                ></div>

                {/* Content (above the hover gradient) */}
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 min-h-[140px]">
                  <div
                    className="text-6xl transition-all duration-300 group-hover:scale-110 social-icon-large"
                    style={{ color: social.color }}
                  >
                    <Icon />
                  </div>
                  <span className="text-gray-800 dark:text-white font-semibold">
                    {social.name}
                  </span>
                </div>

                {/* Hover underline effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
              </a>
            );
          })}
        </div>

        {/* Additional Info (reordered: heading -> text -> CTAs) */}
        <div className="mt-12 highlight-border">
          <div className="highlight-inner center-highlight">
            <div className="flex flex-col items-center text-center gap-4">
              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Open to opportunities</h3>

              {/* Description */}
              <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-2xl">
                <p className="mb-2">
                  Actively seeking new roles. Open to roles in <span className="font-semibold text-purple-600 dark:text-purple-400">India</span> and the <span className="font-semibold text-purple-600 dark:text-purple-400">Gulf region</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400"> — Qatar, UAE, Saudi Arabia, Oman, Kuwait</span>.
                </p>
                <p className="mt-2">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M6.2 2.2a1 1 0 011.4 0l1.4 1.4A1 1 0 0010 4.6V6a6 6 0 11-4-3.8V2.6a1 1 0 01-.8-.4z" />
                    </svg>
                    Available to join immediately
                  </span>
                </p>
              </div>

              {/* CTAs: centered on all sizes; on md+ show as inline with spacing */}
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-center gap-3 w-full md:w-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:scale-[.995] transition-transform duration-200 font-semibold"
                >
                  Get in touch
                </a>

                <a
                  href="/rizwan_react_dev_jan_2026.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-transparent text-gray-800 dark:text-white rounded-full shadow-sm border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition font-medium"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
