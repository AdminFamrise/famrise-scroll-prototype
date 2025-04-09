// src/components/ui/Badge.js
import React from "react";

/**
 * Named export so we can do: import { Badge } from ".../Badge"
 * or default export if you prefer. Just keep usage consistent.
 */
export function Badge({ children, className = "", variant = "default" }) {
  // For demonstration, handle a couple variants:
  let variantClasses = "";
  if (variant === "outline") {
    variantClasses = "border border-gray-400 text-gray-700 bg-white";
  } else if (variant === "solid") {
    variantClasses = "bg-blue-100 text-blue-800";
  }

  return (
    <span
      className={`
        inline-block px-2 py-1 text-xs font-semibold rounded-full
        ${variantClasses} ${className}
      `}
    >
      {children}
    </span>
  );
}
