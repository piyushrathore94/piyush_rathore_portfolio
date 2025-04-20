// pages/contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (in theory 😄). You can now connect this to EmailJS or Formspree.");
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Let’s build something cool together ✨. You can drop me a message using this form or connect on LinkedIn!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-white font-semibold transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
// pages/contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (in theory 😄). You can now connect this to EmailJS or Formspree.");
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Let’s build something cool together ✨. You can drop me a message using this form or connect on LinkedIn!
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-white font-semibold transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
