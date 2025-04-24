'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Banking App",
    image: "/images/bank-project.png",
    link: "https://github.com/yourusername/bank-app",
  },
  {
    title: "Garbage Classifier",
    image: "/images/garbage-project.png",
    link: "https://github.com/yourusername/garbage-classifier",
  },
  {
    title: "Book Store",
    image: "/images/bookstore.png",
    link: "https://github.com/yourusername/bookstore",
  },
];

// Typing animation for title
const typingText = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="px-4 py-20 bg-[#000000] text-gray-300">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center border-b border-gray-700 pb-2 overflow-hidden whitespace-nowrap text-amber-400"
          variants={typingText}
          initial="hidden"
          animate="visible"
        >
          &lt; Projects /&gt;
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-xl border border-gray-700 bg-gray-900 hover:shadow-amber-400/30 transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 2, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaCode className="text-5xl text-amber-400 drop-shadow-lg" />
                </motion.div>
              </a>
              <div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] text-center py-2">
                <motion.span
                  className="text-amber-300 font-semibold tracking-wide"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.title}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
