'use client';

import { socialLinks } from '@/lib/data';

export default function SocialMedia() {
  return (
    <section
      id="socialmedia"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find me on these platforms or download my resume
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                download={social.name === 'Download Resume' || undefined}
                aria-label={social.name}
                className="
                  group relative overflow-hidden rounded-2xl p-6
                  bg-white dark:bg-slate-800
                  border border-gray-200/60 dark:border-slate-700
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
                "
              >
                {/* Always-visible soft brand background */}
                <div
                  className="absolute inset-0 rounded-2xl z-0"
                  style={{
                    background: social.color,
                    opacity: 0.08,
                  }}
                />

                {/* Stronger on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"
                  style={{ background: social.color }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 min-h-[140px] text-center">
                  <div
                    className="text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  >
                    <Icon />
                  </div>

                  <span className="font-semibold text-gray-900 dark:text-white">
                    {social.name}
                  </span>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                  style={{ background: social.color }}
                />
              </a>
            );
          })}
        </div>

        {/* Open to Opportunities – Centered Highlight */}
        <div className="mt-20 flex justify-center">
          <div
            className="
              w-full
              md:w-[55%]
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-700
              rounded-3xl
              shadow-xl
              px-8 py-10
              text-center
            "
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Open to opportunities
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-xl mx-auto">
              Actively seeking new roles in{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                India
              </span>{' '}
              and the{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Gulf Region
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {' '}
                — Qatar, UAE, Saudi Arabia, Oman, Kuwait
              </span>
              .
            </p>

            {/* Availability Badge */}
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-5 py-2 rounded-full font-semibold shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6.2 2.2a1 1 0 011.4 0l1.4 1.4A1 1 0 0010 4.6V6a6 6 0 11-4-3.8V2.6a1 1 0 01-.8-.4z" />
                </svg>
                Available to join immediately
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-[.98] transition-transform"
              >
                Get in touch
              </a>

              <a
                href="/rizwan_react_dev_jan_2026.pdf"
                download
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
