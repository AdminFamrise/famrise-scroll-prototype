// src/components/dashboard/UserDropdown.js

import React, { useState } from "react";
import { Button } from "../ui/Button";

const UserDropdown = ({ name = "You" }) => {
  const [open, setOpen] = useState(false);

  const handleAction = (action) => {
    alert(`🔧 Selected: ${action}`);
    setOpen(false);
  };

  const menuItems = [
    "Subscription",
    "Settings",
    "Accomplishments",
    "Help Center",
    "Logout",
  ];

  return (
    <div className="relative inline-block text-left">
      <Button onClick={() => setOpen(!open)}>
        👤 {name} ▾
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleAction(item)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
