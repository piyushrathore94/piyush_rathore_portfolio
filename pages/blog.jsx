// pages/blog.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    title: "How I Built SignLy – My First AI Accessibility Tool",
    summary: "Behind the scenes of building SignLy, from MediaPipe to TensorFlow, and lessons I learned making tech inclusive.",
    date: "April 12, 2025",
    slug: "signly-ai-story",
  },
  {
    title: "Excel Tricks That Saved Me Hours at My Internship",
    summary: "From VLOOKUP to nested formulas and reporting automation – here’s how I optimized workflows at Paramount Engineers.",
    date: "March 22, 2025",
    slug: "excel-intern-efficiency",
  },
  {
    title: "BitWars Hackathon Experience – Top 5, Crazy Nights, Big Learnings",
    summary: "What it felt like leading a hackathon team, managing chaos, debugging under pressure, and why teamwork wins.",
    date: "February 5, 2025",
    slug: "bitwars-hackathon-experience",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog
      </motion.h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-2">{post.date}</p>
            <p className="text-gray-300 mb-4">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-400 underline">
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
