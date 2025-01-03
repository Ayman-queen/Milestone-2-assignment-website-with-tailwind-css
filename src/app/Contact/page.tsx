
"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Thank you for contacting us!");
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-6">
        {/* Page Title Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We're here to assist you. Feel free to reach out for any inquiries or support.
          </p>
        </motion.div>

        {/* Quranic Ayah Section */}
        <motion.div
          className="mt-12 bg-blue-50 py-8 px-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            A Reminder of Hope
          </h2>
          <p className="text-2xl font-serif text-blue-800 italic leading-relaxed">
            "And He found you lost and guided [you]." <br />
            <span className="font-bold text-gray-600">— Surah Ad-Duhaa (93:7)</span>
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="mt-16 max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;