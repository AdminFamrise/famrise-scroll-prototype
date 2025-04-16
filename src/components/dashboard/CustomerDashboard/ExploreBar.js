// src/components/dashboard/CustomerDashboard/ExploreBar.js

import React from "react";

/**
 * ExploreBar
 *
 * Props:
 * - value (string): The current search input value.
 * - onChange (function): Handler for updating input state.
 * - onSearch (function): Called when user hits Enter or triggers a search action.
 */
const ExploreBar = ({ value, onChange, onSearch }) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">🔍 Explore</h2>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search for a skill or topic..."
        className="w-full p-2 border rounded shadow-sm"
      />
    </section>
  );
};

export default ExploreBar;
