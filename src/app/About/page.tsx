"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-16 px-6">
        {/* Intro Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/about-unique.jpg"  
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:ml-8 mt-8 md:mt-0"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Who We Are
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are a team of innovators and dreamers dedicated to crafting
              solutions that redefine possibilities. With expertise spanning
              web development, data science, and design, we focus on delivering
              unparalleled value to our clients. Our mission is to turn your
              ideas into impactful realities.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              At the core of our philosophy is a passion for growth,
              collaboration, and excellence. Join us as we continue to push
              boundaries and shape the future together.
            </p>
          </motion.div>
        </motion.div>

        {/* Quranic Ayah Section */}
        <motion.div
          className="mt-16 bg-blue-50 py-12 px-6 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            A Message of Reflection
          </h2>
          <p className="text-2xl font-serif text-blue-800 italic leading-relaxed">
            "Indeed, Allah will not change the condition of a people until they
            change what is in themselves." <br />
            <span className="font-bold text-gray-600">— Surah Ar-Ra'd (13:11)</span>
          </p>
        </motion.div>

        {/* Information Cards Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { staggerChildren: 0.3, duration: 0.8 },
            },
          }}
        >
          {[
            {
              title: "Our Mission",
              description:
                "To empower individuals and businesses with technology that inspires and innovates.",
            },
            {
              title: "Our Vision",
              description:
                "To be a leading force in creating sustainable and impactful digital solutions.",
            },
            {
              title: "Our Values",
              description:
                "Integrity, creativity, and a commitment to excellence drive everything we do.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default About;