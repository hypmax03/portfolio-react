import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: "fa-brands fa-html5", label: "HTML/CSS" },
    { icon: "fa-brands fa-bootstrap", label: "Bootstrap" },
    { icon: "fa-solid fa-code", label: "React" },
    { icon: "fa-solid fa-node-js", label: "Node.js" },
    { icon: "fa-solid fa-c", label: "C" },
    { icon: "fa-brands fa-python", label: "Python" },
    { icon: "fa-brands fa-js", label: "JavaScript" },
    { icon: "devicon-tailwindcss-original", label: "Tailwind CSS" }
  ];

  return (
    <section className="py-12 bg-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl text-white font-light">
          What <span className="font-bold">Skills</span> Do I Have?
        </h2>
        <p className="text-gray-300 mt-3">
          Here are the technologies and tools I’m currently learning and working
          with.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="skill-box text-center"
            >
              <i className={`${s.icon} block text-2xl mb-3`} />
              <p className="font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
