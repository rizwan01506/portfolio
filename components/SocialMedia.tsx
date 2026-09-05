'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/lib/data';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function SocialMedia() {
  return (
    <section
      id="socialmedia"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 gradient-text">
            Let&apos;s Connect
          </h2>
          <motion.div
            className="h-px bg-black/20 dark:bg-white/20 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find me on these platforms or download my resume
          </p>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={index}
                href={social.url}
                target={social.name !== 'Email' ? '_blank' : undefined}
                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                download={social.name === 'Download Resume' || undefined}
                aria-label={social.name}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group relative overflow-hidden rounded-md p-6
                  bg-transparent
                  border border-black/10 dark:border-white/10
                  hover:border-black/25 dark:hover:border-white/25
                  transition-colors duration-300
                  focus:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white
                "
              >
                {/* Always-visible soft brand background */}
                <div
                  className="absolute inset-0 rounded-md z-0"
                  style={{
                    background: social.color,
                    opacity: 0.08,
                  }}
                />

                {/* Stronger on hover */}
                <div
                  className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-15 transition-opacity duration-300 z-0"
                  style={{ background: social.color }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 min-h-[140px] text-center">
                  <motion.div
                    className="text-5xl"
                    style={{ color: social.color }}
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon />
                  </motion.div>

                  <span className="font-semibold text-gray-900 dark:text-white">
                    {social.name}
                  </span>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px rounded-b-md"
                  style={{ background: social.color }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Open to Opportunities – Centered Highlight */}
        <motion.div
          className="mt-20 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="
              w-full
              md:w-[55%]
              bg-primary-50 dark:bg-primary-900/20
              border-2 border-primary-600/30 dark:border-primary-400/30
              rounded-md
              shadow-sm
              px-8 py-10
              text-center
            "
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Open to opportunities
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base max-w-xl mx-auto">
              Actively seeking new roles in{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                India
              </span>{' '}
              and the{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Gulf Region
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {' '}
                - Qatar, UAE, Saudi Arabia, Oman, Kuwait
              </span>
              .
            </p>

            {/* Availability Badge */}
            <div className="mt-5">
              <span className="relative inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-full font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Available to join immediately
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium"
                whileHover={{ scale: 1.03, opacity: 0.85 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.a>

              <motion.a
                href="/Md_Rizwan_Senior_Frontend_Engineer_6_YOE.pdf"
                download
                className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-gray-800 dark:text-white"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(0,0,0,0.05)' }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
