// src/components/layout/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-700">Famrise</div>
      <nav className="space-x-4 text-sm text-gray-700">
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/profile" className="hover:underline">Profile</a>
        <a href="/explore" className="hover:underline">Explore</a>
      </nav>
    </header>
  );
};

export default Header;
