// pages/projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Human Resource Management System",
    description:
      "A full-featured HRMS with role-based access, payroll, performance tracking, built using React, Node.js, and Docker for scalability.",
    tech: ["React", "Node.js", "Docker", "MongoDB"],
    github: "https://github.com/piyushrathore94/hrms", // Add your real GitHub link
    live: "#", // Optional: link to live site
  },
  {
    title: "SignLy - AI Sign Language Interpreter",
    description:
      "Empowering the differently-abled through real-time gesture-to-text & speech-to-text, built using Python, MediaPipe, OpenCV, and TensorFlow.",
    tech: ["Python", "MediaPipe", "TensorFlow", "OpenCV"],
    github: "https://github.com/piyushrathore94/signly", // Add your real GitHub link
    live: "#",
  },
  {
    title: "Student Management System",
    description:
      "A MERN-stack CRUD platform for student data with Docker support and a Makefile-based deployment setup.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Docker"],
    github: "https://github.com/piyushrathore94/studentdb", // Add your real GitHub link
    live: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-800 px-3 py-1 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 underline"
                >
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
