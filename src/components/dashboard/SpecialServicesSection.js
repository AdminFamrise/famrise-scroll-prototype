// src/components/dashboard/SpecialServicesSection.js

import React from "react";
import { Button } from "../ui/Button";

const SpecialServicesSection = ({ matrixLabel, hasMHCData }) => {
  const needsSupport = hasMHCData && matrixLabel && matrixLabel !== "Thriving";

  return (
    <section className="mb-6 p-4 border rounded bg-blue-50">
      <h2 className="text-lg font-semibold mb-2">💠 Special Services</h2>

      {!hasMHCData && (
        <>
          <p className="text-sm mb-2 text-gray-700">
            We haven’t assessed your psychological or social well-being yet.
          </p>
          <Button onClick={() => alert("Redirecting to MHC-SF form")}>
            Fill in the MHC-SF Form
          </Button>
        </>
      )}

      {hasMHCData && !needsSupport && (
        <p className="text-sm text-green-700">
          ✅ No special services are required at this time.
        </p>
      )}

      {needsSupport && (
        <>
          <p className="text-sm text-yellow-800 mb-2">
            Based on your self-check, we recommend tailored support options for emotional or social well-being.
          </p>
          <ul className="text-sm list-disc ml-6 text-gray-800">
            <li>🧑‍⚕️ Connect with social care volunteers or professionals</li>
            <li>🤝 Join peer groups for emotional growth</li>
            <li>📬 Access guided reflection or community-based healing tools</li>
          </ul>
        </>
      )}
    </section>
  );
};

export default SpecialServicesSection;
