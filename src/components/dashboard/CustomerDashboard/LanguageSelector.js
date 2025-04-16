// src/components/dashboard/CustomerDashboard/LanguageSelector.js

import React from "react";

/**
 * LanguageSelector
 *
 * Lets the user pick:
 * 1) The site interface language (e.g., 'en' or 'nl').
 * 2) A practice language add-on for skill-based language prompts.
 *
 * Props:
 * - language (string): The current site language code (e.g. 'en', 'nl').
 * - setLanguage (function): Handler to update site language.
 * - languageAddOn (string): The chosen practice language (e.g. 'Dutch', 'English').
 * - setLanguageAddOn (function): Handler to update practice language preference.
 */
const LanguageSelector = ({
  language,
  setLanguage,
  languageAddOn,
  setLanguageAddOn,
}) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">🌍 Language Preferences</h2>

      {/* Site Language */}
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
          {/* Add more site languages as needed */}
        </select>
      </div>

      {/* Practice Language Add-On */}
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
          {/* Add more practice languages as needed */}
        </select>
      </div>
    </section>
  );
};

export default LanguageSelector;

