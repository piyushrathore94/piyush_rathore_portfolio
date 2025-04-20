// pages/about.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl">
        <motion.div
          className="w-60 h-60 relative rounded-full overflow-hidden border-4 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile.jpg" // Place your image in /public/images/
            layout="fill"
            objectFit="cover"
            alt="Piyush Rathore"
          />
        </motion.div>

        <motion.div
          className="text-lg space-y-4 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            Hey! I’m <span className="text-blue-400 font-semibold">Piyush Rathore</span>, a B.Tech CSE student from MAIT, Delhi, passionate about building smart solutions and learning everything about full-stack development, AI, and data.
          </p>
          <p>
            I love working on challenging problems that require creativity, logic, and automation. Currently interning at Paramount Engineers and leading a tech team for a national innovation challenge.
          </p>
          <p className="italic text-gray-400">"Code with purpose. Build for impact." 💻✨</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          👨‍💻 3+ Major Projects
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🧠 BitWars Finalist
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🧩 MERN, Docker, AI Dev
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🎤 Campus Lead @ Brainchant
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          📊 Excel + Data Automation
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🏗 Building Signly (AI + Accessibility)
        </div>
      </motion.div>
    </div>
  );
}
// pages/about.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl">
        <motion.div
          className="w-60 h-60 relative rounded-full overflow-hidden border-4 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/profile.jpg" // Place your image in /public/images/
            layout="fill"
            objectFit="cover"
            alt="Piyush Rathore"
          />
        </motion.div>

        <motion.div
          className="text-lg space-y-4 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            Hey! I’m <span className="text-blue-400 font-semibold">Piyush Rathore</span>, a B.Tech CSE student from MAIT, Delhi, passionate about building smart solutions and learning everything about full-stack development, AI, and data.
          </p>
          <p>
            I love working on challenging problems that require creativity, logic, and automation. Currently interning at Paramount Engineers and leading a tech team for a national innovation challenge.
          </p>
          <p className="italic text-gray-400">"Code with purpose. Build for impact." 💻✨</p>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          👨‍💻 3+ Major Projects
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🧠 BitWars Finalist
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🧩 MERN, Docker, AI Dev
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🎤 Campus Lead @ Brainchant
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          📊 Excel + Data Automation
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          🏗 Building Signly (AI + Accessibility)
        </div>
      </motion.div>
    </div>
  );
}
