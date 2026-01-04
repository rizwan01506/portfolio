'use client';

import { socialLinks } from '@/lib/data';

export default function SocialMedia() {
  return (
    <section id="socialmedia" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Find me on these platforms or download my resume
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                download={social.name === 'Download Resume' ? true : undefined}
                className="group relative overflow-hidden bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background Gradient on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: social.color }}
                ></div>

                {/* Icon */}
                <div className="relative flex flex-col items-center gap-4">
                  <div
                    className="text-5xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  >
                    <Icon />
                  </div>
                  <span className="text-gray-800 dark:text-white font-semibold">
                    {social.name}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Open to opportunities in <span className="font-semibold text-purple-600 dark:text-purple-400">India</span> and the{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">Gulf region</span> (Qatar, UAE, Saudi Arabia)
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Available to join immediately
          </p>
        </div>
      </div>
    </section>
  );
}
