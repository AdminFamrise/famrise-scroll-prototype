// src/components/ui/Tabs.js
import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex border-b mb-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 font-semibold border-b-2 ${
              i === active
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border rounded shadow-sm">
        {tabs[active].content}
      </div>
    </div>
  );
};

export default Tabs;
