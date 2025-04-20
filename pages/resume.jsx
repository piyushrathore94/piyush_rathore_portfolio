// pages/resume.jsx
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Here's a quick overview of my academic and professional experience. You can also download the full resume in PDF format.
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium rounded-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        📄 Download Resume
      </motion.a>

      <motion.iframe
        src="/resume.pdf"
        className="w-full max-w-4xl h-[600px] rounded-xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />
    </div>
  );
}
