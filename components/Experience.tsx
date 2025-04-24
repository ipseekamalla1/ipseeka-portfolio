'use client';

import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const experienceData = [
  {
    role: "QA Intern",
    company: "XYZ IT Firm, Nepal",
    duration: "June 2021 – Dec 2021",
    description: "Performed manual testing, reported bugs, and assisted in improving QA documentation.",
  },
  {
    role: "Part-time Developer",
    company: "Freelance",
    duration: "2023 – Present",
    description: "Worked on various small-scale full-stack projects using MERN, Laravel, and .NET MVC.",
  },
];

const headingVariant = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, rotateX: 90, y: 30 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section className="px-4 max-w-4xl mx-auto text-gray-300">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center text-amber-600 overflow-hidden whitespace-nowrap border-b border-gray-700 pb-2 mb-8 flex items-center justify-center gap-2"
        initial="hidden"
        animate="visible"
        variants={headingVariant}
      >
        <FaTerminal className="text-amber-600" />
        &lt;Experience /&gt;
      </motion.h2>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#0f0f0f] border-l-4 border-amber-600 rounded-md p-5 shadow-md hover:shadow-amber-500/30 transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg sm:text-xl text-amber-300 font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-400 italic">{exp.company}</p>
            <div className="text-xs text-gray-500 mt-1">{exp.duration}</div>
            <p className="text-sm mt-3 text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
