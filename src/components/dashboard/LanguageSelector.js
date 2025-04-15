// src/components/dashboard/LanguageSelector.js

import React from "react";

const LanguageSelector = ({ language, setLanguage, languageAddOn, setLanguageAddOn }) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">🌍 Language Preferences</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Site Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="en">English</option>
          <option value="nl">Dutch</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Practice Language Add-On
        </label>
        <select
          value={languageAddOn}
          onChange={(e) => setLanguageAddOn(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a language to practice</option>
          <option value="Dutch">Dutch</option>
          <option value="English">English</option>
        </select>
      </div>
    </section>
  );
};

export default LanguageSelector;
