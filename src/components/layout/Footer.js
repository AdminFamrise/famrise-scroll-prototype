// src/components/layout/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm py-4 text-gray-500">
      © {new Date().getFullYear()} Famrise. Empowering Families for a Better Future.
    </footer>
  );
};

export default Footer;
