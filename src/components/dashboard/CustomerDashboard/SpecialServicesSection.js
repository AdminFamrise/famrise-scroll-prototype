// src/components/dashboard/CustomerDashboard/SpecialServicesSection.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";

const SpecialServicesSection = ({ matrixLabel, hasWellbeingData }) => {
  const navigate = useNavigate();
  const needsSupport =
    hasWellbeingData && matrixLabel && matrixLabel !== "Thriving";

  return (
    <section className="mb-6 p-4 border rounded bg-blue-50">
      <h2 className="text-lg font-semibold mb-2">💠 Special Services</h2>

      {!hasWellbeingData && (
        <>
          <p className="text-sm mb-2 text-gray-700">
            You haven't completed your optional well-being check yet.
            It helps us personalize support based on your social and emotional needs.
          </p>
          <Button onClick={() => navigate("/wellbeing-check")}>
            Fill in the Well-Being Check
          </Button>
        </>
      )}

      {hasWellbeingData && !needsSupport && (
        <p className="text-sm text-green-700">
          ✅ You're doing well — no special services are currently recommended.
        </p>
      )}

      {needsSupport && (
        <>
          <p className="text-sm text-gray-800 mb-2">
            Based on your well-being check, we've identified support options that may help you stay grounded and connected.
          </p>
          <ul className="text-sm list-disc ml-6 text-gray-800">
            <li>🧑‍⚕️ Talk to a care volunteer or coach</li>
            <li>🤝 Join a small reflection group</li>
            <li>🧘‍♂️ Access tools for emotional grounding or focus</li>
          </ul>
        </>
      )}
    </section>
  );
};

export default SpecialServicesSection;


