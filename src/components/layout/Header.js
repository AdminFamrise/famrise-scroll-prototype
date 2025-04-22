// src/components/layout/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        <Link to="/">Famrise</Link>
      </h1>
      <nav className="space-x-6 text-sm text-gray-700">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/explore" className="hover:underline">Explore</Link>
        <Link to="/coach-directory" className="hover:underline">Coaches</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/help" className="hover:underline">Help</Link>
      </nav>
    </header>
  );
};

export default Header;

