'use client';
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaEye, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type Project = {
  title: string;
  image: string;
  link: string;
  demo: string;
  description: string;
};

const projects: Project[] = [
  {
    title: " Capitawave Banking Website",
    image: "/assets/bank-app.png",
    link: "https://github.com/ipseekamalla1/capitawave",
    demo: "https://bank-app-demo.vercel.app",
    description:
      "A full-stack banking app with account management, transactions, and analytics dashboard. Built using Next.js, Prisma, and PostgreSQL.",
  },
  {
    title: "AuroHome Ecommerce Website",
    image: "/assets/ecom-app.png",
    link: "https://github.com/yourusername/aurohome-ecommerce", // Update if needed
    demo: "https://aurohome-demo.vercel.app", // Replace with your actual demo URL if different
    description:
      "A feature-rich ecommerce website built with PHP and Laravel, supporting product browsing, user authentication, cart management, and order processing. Designed with a focus on scalability and user-friendly experience.",
  },
  
  {
    title: "Care Pulse Medical Clinic",
    image: "/assets/medical-app.png",
    link: "https://github.com/ipseekamalla1/carepulse",
    demo: "https://carepulse-demo.vercel.app", // Replace with your actual live demo if different
    description:
      "A full-stack medical web app built with Next.js and Appwrite that allows patients to register, book appointments, and manage their profiles. Includes secure authentication, real-time database integration, and a responsive user interface.",
  },
  
];

const typingText = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 2, ease: "easeInOut" } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="px-4 bg-[#000] text-gray-300 relative ">
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
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-2xl border border-gray-700 bg-gray-900 hover:shadow-amber-400/30 transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="relative w-full h-64 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 gap-6">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-[#1a1a1a] rounded-full"
                  aria-label="View Code on GitHub"
                  title="View Code on GitHub"
                >
                  <FaCode className="text-2xl text-amber-400" />
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-[#1a1a1a] rounded-full"
                  aria-label="View Live Demo"
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt className="text-2xl text-amber-400" />
                </motion.a>
                <button
                  onClick={() => setActiveProject(project)}
                  className="p-3 bg-[#1a1a1a] rounded-full"
                  aria-label="View Project Details"
                  title="View Project Details"
                >
                  <FaEye className="text-2xl text-amber-400" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[#111] bg-opacity-80 backdrop-blur-sm py-2">
                <motion.h3
                  className="text-amber-300 font-semibold tracking-wide text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-64 md:h-full">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 flex flex-col">
                <button
                  onClick={() => setActiveProject(null)}
                  className="self-end text-gray-400 hover:text-amber-400 mb-4"
                  aria-label="Close Project Details"
                  title="Close Project Details"
                >
                  <FaTimes size={20} />
                </button>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  {activeProject.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 transition"
                  >
                    View Code
                  </a>
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
