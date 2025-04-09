import React from "react";

export const Input = ({ name, placeholder, onChange, className }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={`border p-2 ${className}`}
    />
  );
};
