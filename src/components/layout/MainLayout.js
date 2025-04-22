// src/layouts/MainLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-6">
          <Outlet /> {/* This renders your route pages */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
