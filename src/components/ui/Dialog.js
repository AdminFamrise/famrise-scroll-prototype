// src/components/ui/Dialog.js
import React from "react";

export function Dialog({ children }) {
  return <div className="relative">{children}</div>;
}

export function DialogTrigger({ children, className }) {
  // In practice, you’d store some open/close state or pass events
  return <button className={className}>{children}</button>;
}

export function DialogContent({ children }) {
  return (
    <div className="absolute top-0 left-0 bg-white border p-4 shadow-md">
      {children}
    </div>
  );
}
