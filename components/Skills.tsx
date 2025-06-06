import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaPhp } from "react-icons/fa";
import { SiTensorflow, SiCplusplus, SiJavascript, SiExpress, SiFigma,SiPrisma } from "react-icons/si";

import { SiPostgresql, SiMongodb } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  category: string;
  techs: Tech[];
}

const skills: SkillGroup[] = [
  {
    category: "Frontend",
    techs: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-300" /> },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Prisma", icon: <SiPrisma className="text-pink-500" /> },
    ],
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    ],
  },
  {
    category: "Programming Languages",
    techs: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "AI/Machine Learning", icon: <SiTensorflow className="text-green-500" /> },
      { name: ".NET", icon: <AiOutlineDotNet className="text-blue-500" /> },
      { name: "C++", icon: <SiCplusplus className="text-cyan-500" /> },
      { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills: React.FC = () => {
  return (
    <section className="text-white px-4 max-w-4xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-8 text-center border-b border-gray-700 pb-2">
          &lt;Skills/&gt;
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-[#4c3c01] rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-teal-400/30 transition-shadow ${
                group.category === "Programming Languages" ? "col-span-full" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-amber-300 mb-4 text-center">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {group.techs.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    className="flex flex-col items-center transition-transform duration-300 cursor-pointer"
                  >
                    <div className="text-5xl mb-2">{tech.icon}</div>
                    <span className="text-base font-medium text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
