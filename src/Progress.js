// src/components/ui/Progress.js
import React from "react";
import { motion } from "framer-motion";

export const Progress = ({ value = 0 }) => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
};
