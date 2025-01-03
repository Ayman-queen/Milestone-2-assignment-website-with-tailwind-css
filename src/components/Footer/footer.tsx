"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-white">Ayman'sWebsite</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;