// src/components/dashboard/QuickLinks.js

import React from "react";
import { Button } from "../ui/Button";

const quickLinks = [
  {
    label: "📚 My Current Learnings",
    onClick: () => alert("Navigating to Current Learnings..."),
  },
  {
    label: "🎓 My Specializations",
    onClick: () => alert("Navigating to Specializations..."),
  },
  {
    label: "🧑‍🏫 My Mentor Sessions",
    onClick: () => alert("Navigating to Mentor Sessions..."),
  },
];

const QuickLinks = () => {
  return (
    <section className="mb-6 p-4 border rounded bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-3">🚀 Quick Access</h2>
      <div className="flex flex-col gap-3">
        {quickLinks.map((link, index) => (
          <Button key={index} onClick={link.onClick} className="text-left">
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
