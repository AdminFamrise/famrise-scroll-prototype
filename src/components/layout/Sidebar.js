// src/components/layout/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r hidden lg:block">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>
            <Link to="/dashboard" className="hover:text-blue-600">
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link to="/explore" className="hover:text-blue-600">
              🔍 Explore Skills
            </Link>
          </li>
          <li>
            <Link to="/coach-directory" className="hover:text-blue-600">
              🧑‍🏫 Coaches & Mentors
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-600">
              👤 My Profile
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
