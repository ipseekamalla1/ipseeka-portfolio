import { motion } from "framer-motion";

const educationData = [
  {
    duration: "January 2024 – Present",
    degree: "Web Development",
    institution: "Conestoga College",
  },
  {
    duration: "November 2016 – January 2022",
    degree: "Bachelors of Computer Engineering",
    institution: "Khwopa Engineering College (Affiliated with Purbanchal University)",
    gpa: "GPA: 3.35 / 4",
  },
  {
    duration: "June 2014 – May 2016",
    degree: "High School",
    institution: "Trinity International College",
    gpa: "71.6%",
  },
  {
    duration: "April 2004 – March 2014",
    degree: "School Leaving Certificate (SLC)",
    institution: "",
    gpa: "79.6%",
  },
];

export default function EducationSection() {
  return (
    <section id="resume" className="px-4 bg-[#000000] text-gray-300 max-w-4xl">
    <div className="max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-8 text-center border-b border-gray-700 pb-2">
      &lt;Education/&gt;
      </h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 shadow-lg hover:border-gray-400 transition duration-300"
          >
            <h3 className="text-lg text-amber-300">{edu.degree}</h3>
            <p className="text-sm text-gray-400 italic">{edu.institution}</p>
            <div className="text-xs text-gray-500 mt-1 flex flex-col sm:flex-row sm:justify-between">
              <span>{edu.duration}</span>
              {edu.gpa && <span>{edu.gpa}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  
  );
}
