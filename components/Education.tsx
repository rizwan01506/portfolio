'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '@/lib/data';

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
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 gradient-text">
            Educations
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
          className="grid sm:grid-cols-2 gap-6 sm:gap-8"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-md border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border border-black/10 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-xl sm:text-2xl text-black dark:text-white" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{edu.period}</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold">
                  {edu.field}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
