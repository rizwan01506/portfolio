'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/lib/data';

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
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 gradient-text">
            Certifications &amp; Achievements
          </h2>
          <motion.div
            className="h-px bg-black/20 dark:bg-white/20 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const Wrapper = cert.url ? motion.a : motion.div;
            return (
              <Wrapper
                key={index}
                {...(cert.url ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-md border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="text-xl text-black dark:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.issuer}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
