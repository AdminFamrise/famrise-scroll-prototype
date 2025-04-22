import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">Famrise</div>
        <nav className="space-x-4 text-sm text-gray-700">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/explore" className="hover:underline">Explore</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/help" className="hover:underline">Help</Link>
        </nav>
      </header>

      {/* Main Section with Sidebar and Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r hidden lg:block">
          <div className="p-4 space-y-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase">Navigation</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="block px-2 py-1 hover:bg-gray-100 rounded">🏠 Dashboard</Link></li>
              <li><Link to="/explore" className="block px-2 py-1 hover:bg-gray-100 rounded">🔍 Explore Skills</Link></li>
              <li><Link to="/coach-directory" className="block px-2 py-1 hover:bg-gray-100 rounded">🧑‍🏫 Coaches</Link></li>
              <li><Link to="/profile" className="block px-2 py-1 hover:bg-gray-100 rounded">👤 My Profile</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6">
          <div className="grid gap-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} Famrise. Empowering Families for a Better Future.
      </footer>
    </div>
  );
};

export default MainLayout;
