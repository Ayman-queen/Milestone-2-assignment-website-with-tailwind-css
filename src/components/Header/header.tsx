"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-blue-400 text-lg font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:text-blue-400 text-lg font-medium transition duration-300"
          >
            About
          </Link>
          <Link
            href="/Contact"
            className="hover:text-blue-400 text-lg font-medium transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;