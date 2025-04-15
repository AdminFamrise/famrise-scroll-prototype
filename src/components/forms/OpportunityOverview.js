// src/components/forms/OpportunityOverview.js

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { getUserData } from "../../services/UserDataService";
import LanguageLayer from "../language/LanguageLayer";
import mockSpecialServices from "../../services/MockSpecialServices"; // ✅ New file with extra support options

const OpportunityOverview = ({ solutions, onComplete }) => {
  const [userData, setUserData] = useState(null);
  const [specialSupport, setSpecialSupport] = useState([]);

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData(data);

      if (data.mhcSWB !== undefined && data.mhcPWB !== undefined) {
        const extras = mockSpecialServices.filter(
          (svc) =>
            svc.realLifeScenario === data.realLifeScenario &&
            svc.specificGoal === data.specificGoal
        );
        setSpecialSupport(extras);
      }
    }
  }, []);

  const getFilteredSolutions = () => {
    if (!userData || !solutions || solutions.length === 0) return [];

    return solutions.filter(
      (sol) =>
        sol.Scenario === userData.realLifeScenario &&
        sol.SpecificGoal === userData.specificGoal
    );
  };

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">🌱 Opportunity Overview</h2>

        <h3 className="mt-4 font-semibold">🎒 Your Matching Learning Options</h3>
        {getFilteredSolutions().length > 0 ? (
          getFilteredSolutions().map((sol, index) => (
            <div key={index} className="mb-4 border rounded p-3 bg-gray-50">
              <h4 className="font-semibold">{sol.Title}</h4>
              <p className="text-sm text-gray-700">{sol.Description}</p>
              <p className="text-xs text-gray-500 mt-1">
                Interaction: {sol.InteractionType} | Language:{" "}
                {sol.LanguageAddOn}
              </p>
              <LanguageLayer
                goal={userData.specificGoal}
                level={userData.dutchComfort}
              />
            </div>
          ))
        ) : (
          <p className="text-sm mt-2">No matched learning found.</p>
        )}

        {specialSupport.length > 0 && (
          <>
            <h3 className="mt-8 font-semibold">
              🧠 Extra Suggestions Based on Your Mental Health Check
            </h3>
            {specialSupport.map((svc, idx) => (
              <div key={idx} className="mb-4 border rounded p-3 bg-white">
                <h4 className="font-semibold">{svc.title}</h4>
                <p className="text-sm text-gray-700">{svc.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Format: {svc.format} | Interaction: {svc.interactionType} |
                  Language: {svc.languages.join(", ")}
                </p>
              </div>
            ))}
          </>
        )}

        <Button className="mt-6" onClick={onComplete}>
          See My Personalized Path
        </Button>
      </CardContent>
    </Card>
  );
};

export default OpportunityOverview;
