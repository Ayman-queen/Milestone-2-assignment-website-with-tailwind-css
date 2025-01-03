"use client";

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

import Link from "next/link";
import Image from "next/image";


const Home = () => {
  const expertiseItems = [
    {
      title: "Custom Development",
      description:
        "Bespoke solutions crafted for your unique needs. From sleek websites to robust applications, we build with precision.",
      image: "/images/custom-development.png",
      color: "text-blue-500",
    },
    {
      title: "Data Analytics",
      description:
        "Leverage the power of data to drive informed decisions. Our tools and insights take your business forward.",
      image: "/images/data-analytics.jpg",
      color: "text-green-500",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, user-focused designs that blend creativity and functionality to captivate your audience.",
      image: "/images/ui-ux-design.jpg",
      color: "text-purple-500",
    },
  ];

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen overflow-hidden"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-6 sm:px-12 lg:px-24">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in">
            Where Dreams Meet Reality
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 animate-slide-up delay-200">
            Empowering you with innovation and expertise.
          </p>
          <p className="text-lg italic text-gray-300 mb-4 fade-in-left delay-400">
            "Indeed, We give victory to Our messengers and those who have believed." <br />
            <span className="text-gray-400 text-sm">— Surah Ghafir (40:51)</span>
          </p>
          <p className="text-md sm:text-lg text-gray-300 mb-6 fade-in-right delay-600">
            "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ"
          </p>
          <div className="space-x-4">
            <Link
              href="/About"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transform transition duration-300"
            >
              Learn More
            </Link>
            <Link
              href="/Contact"
              className="bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded-lg hover:scale-105 transform transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Tailored solutions to help you succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Expertise Cards */}
            {expertiseItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-6 transform group-hover:rotate-1 transition duration-300"
                />
                <h3 className={`text-2xl font-bold mb-4 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-in">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Let us help turn your vision into reality. Reach out to start your journey with us.
          </p>
          <Link
            href="/Contact"
            className="bg-white text-blue-500 px-8 py-4 rounded-lg font-bold hover:opacity-90 transition duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
