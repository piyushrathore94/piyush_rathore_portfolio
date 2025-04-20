// pages/skills.jsx
import { motion } from "framer-motion";

const skills = [
  { name: "C++", level: 90 },
  { name: "Python", level: 85 },
  { name: "Java", level: 75 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 78 },
  { name: "TensorFlow", level: 70 },
  { name: "Excel", level: 95 },
  { name: "Docker", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "SQL", level: 80 },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-4 rounded-xl shadow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-2">{skill.name}</h2>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-right mt-1 text-sm text-gray-400">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
