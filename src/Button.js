import React from "react";
import clsx from "clsx";

export const Button = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-blue-600 hover:underline",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
