// src/components/forms/FinalUIBuilder.js

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { getUserData } from "../../services/UserDataService";
import { Button } from "../ui/Button";
import { getRecommendedInteractions } from "../../services/MatrixLabelAssigner";
import LanguageLayer from "../language/LanguageLayer";
import mockSolutions from "../../services/MockSolutions";
import mockServices from "../../services/MockServices";

const FinalUIBuilder = ({ onRestart }) => {
  const [user, setUser] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [interactionSuggestions, setInteractionSuggestions] = useState([]);

  useEffect(() => {
    const data = getUserData();
    setUser(data);
    if (data) {
      const label = data.matrixLabel || "Unknown";
      setInteractionSuggestions(getRecommendedInteractions(label));
      setSolutions(mockSolutions);
    }
  }, []);

  const getFilteredSolutions = () => {
    if (!user || !solutions.length) return [];
    return solutions.filter((sol) => {
      const interactionMatch = interactionSuggestions.includes(
        sol.InteractionType
      );
      const scenarioMatch = sol.Scenario === user.realLifeScenario;
      const goalMatch = sol.SpecificGoal === user.specificGoal;
      return interactionMatch && scenarioMatch && goalMatch;
    });
  };

  const getFilteredServices = () => {
    if (!user || !mockServices.length) return [];
    return mockServices.filter((svc) => {
      const interactionMatch = interactionSuggestions.includes(
        svc.interactionType
      );
      const scenarioMatch = svc.realLifeScenario === user.realLifeScenario;
      const goalMatch = svc.specificGoal === user.specificGoal;
      return interactionMatch && scenarioMatch && goalMatch;
    });
  };

  if (!user) return <p>Loading your profile...</p>;

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">
          👤 Your Personalized Dashboard
        </h2>

        {/* 🔹 Basic Profile Overview */}
        <div className="mb-4 text-sm space-y-1">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>ZIP Code:</strong> {user.zipCode}
          </p>
          <p>
            <strong>City:</strong> {user.city}
          </p>
          <p>
            <strong>Dutch Comfort:</strong> {user.dutchComfort}
          </p>
          <p>
            <strong>Language Add-On:</strong> {user.languageAddOn?.join(", ")}
          </p>
          <p>
            <strong>Scenario:</strong> {user.realLifeScenario}
          </p>
          <p>
            <strong>Goal:</strong> {user.specificGoal}
          </p>
          <p>
            <strong>School:</strong> {user.school}
          </p>
        </div>

        {/* 🔹 MHC Scores */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-4 text-sm">
          <h3 className="text-lg font-semibold mb-2">
            🧠 Mental Health Insights
          </h3>
          <p>
            <strong>Well-Being Status:</strong> {user.matrixLabel}
          </p>
          <p>
            <strong>Emotional Well-Being:</strong> {user.mhcEWB}/15
          </p>
          <p>
            <strong>Social Well-Being:</strong> {user.mhcSWB}/25
          </p>
          <p>
            <strong>Psychological Well-Being:</strong> {user.mhcPWB}/30
          </p>
          <p>
            <strong>Category:</strong> {user.mhcCategory}
          </p>
        </div>

        {/* 🔹 Solutions */}
        <h3 className="text-lg font-semibold mt-6 mb-2">
          🧩 Matched Learning Baskets
        </h3>
        {getFilteredSolutions().map((sol, idx) => (
          <div key={idx} className="mb-4 border rounded p-4 bg-gray-50">
            <h4 className="font-semibold text-md mb-1">{sol.Title}</h4>
            <p className="text-sm mb-1">{sol.Description}</p>
            <p className="text-xs text-gray-600">
              Interaction: {sol.InteractionType} | Language: {sol.LanguageAddOn}
            </p>
            <LanguageLayer goal={user.specificGoal} level={user.dutchComfort} />
          </div>
        ))}

        {/* 🔹 Coaches/Services */}
        <h3 className="text-lg font-semibold mt-8 mb-2">🛠️ Service Options</h3>
        {getFilteredServices().map((svc, idx) => (
          <div key={idx} className="mb-6 border rounded p-4 bg-white shadow-sm">
            <div className="flex items-start gap-4">
              <img
                src={svc.avatar}
                alt={svc.title}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-md mb-1">{svc.title}</h4>
                <p className="text-sm mb-1">{svc.bio}</p>
                <p className="text-xs text-gray-600">
                  Format: {svc.format} | Interaction: {svc.interactionType} |
                  Language: {svc.languages.join(", ")}
                </p>

                {/* 🔸 CTA: Book Call */}
                <div className="mt-3 flex gap-3 flex-wrap">
                  <a
                    href={svc.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    📅 Book Intro Call
                  </a>

                  {/* 🔸 Optional Peer Group */}
                  {svc.groupInvite && (
                    <a
                      href={svc.groupInvite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-2 border border-green-600 text-green-700 rounded hover:bg-green-50"
                    >
                      💬 Join Peer Group
                    </a>
                  )}
                </div>

                {/* 🔸 Language Layer for Contextual Tips */}
                <LanguageLayer
                  goal={user.specificGoal}
                  level={user.dutchComfort}
                />
              </div>
            </div>
          </div>
        ))}

        {/* 🔹 Restart */}
        <div className="text-center mt-6">
          <Button onClick={onRestart}>🔁 Start Over</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinalUIBuilder;
