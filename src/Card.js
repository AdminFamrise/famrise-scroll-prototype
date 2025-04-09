// src/components/ui/Card.js
import React from "react";
import { motion } from "framer-motion";

export const Card = ({ children, className }) => {
  return (
    <motion.div
      className={`bg-white shadow-md rounded-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
