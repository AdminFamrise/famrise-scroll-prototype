// src/components/forms/OpportunityOverview.js

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { getUserData } from "../../services/UserDataService";
import { getRecommendedInteractions } from "../../services/MatrixLabelAssigner";
import LanguageLayer from "../language/LanguageLayer";

const OpportunityOverview = ({ solutions, onComplete }) => {
  const [userData, setUserData] = useState(null);
  const [wbMessage, setWbMessage] = useState("");
  const [matrixLabel, setMatrixLabel] = useState("");
  const [interactionSuggestions, setInteractionSuggestions] = useState([]);

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData(data);
      const label = data.matrixLabel || "Unknown";
      setMatrixLabel(label);
      processWellBeingMessage(label);
      setInteractionSuggestions(getRecommendedInteractions(label));
    }
  }, []);

  const processWellBeingMessage = (label) => {
    const labelMessages = {
      "Crisis Mode":
        "🚨 You're in a demanding period. Structured guidance can help bring stability and support your next steps.",
      Unstable:
        "⚠️ Things might feel unsteady. Let's prioritize clarity and build confidence together.",
      Struggling:
        "💡 You’re not alone. With a bit of structure and encouragement, we can unlock new progress.",
      "Underutilized Potential":
        "🔄 You've got strengths that aren’t fully activated yet. Let's discover what’s possible.",
      "Potential for Growth":
        "📈 You’re on the edge of progress. The right support can make a big difference now.",
      "Optimization Needed":
        "⚖️ A bit of fine-tuning could elevate your experience. We’ll guide you through personalized steps.",
      Resilient:
        "🏆 You’re managing well — now is a great time to build deeper skills with independence.",
      "Momentum Building":
        "🚀 You're making great strides. Let’s maintain that energy with practical applications.",
      Thriving:
        "🌟 You’re doing amazing. Let’s keep it going with advanced or solo learning options.",
    };

    setWbMessage(
      labelMessages[label] ||
        "🔍 Let’s explore support that fits your current needs and potential."
    );
  };

  const getFilteredSolutions = () => {
    if (!userData || !solutions || solutions.length === 0) return [];

    const { realLifeScenario, specificGoal } = userData;

    return solutions.filter((sol) => {
      const interactionMatch = interactionSuggestions.includes(
        sol.InteractionType
      );
      const scenarioMatch = sol.Scenario === realLifeScenario;
      const goalMatch = sol.SpecificGoal === specificGoal;

      return interactionMatch && scenarioMatch && goalMatch;
    });
  };

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">🌱 Opportunity Overview</h2>

        {userData && (
          <>
            <p className="mb-2">
              <strong>Current Well-Being Status:</strong>{" "}
              <span className="italic">{matrixLabel}</span>
            </p>
            <p className="text-gray-600 mb-4">{wbMessage}</p>
          </>
        )}

        <h3 className="mt-4 font-semibold">Suggested Learning Interactions</h3>
        {interactionSuggestions.length > 0 ? (
          <>
            <ul className="list-disc ml-6 mt-1">
              {interactionSuggestions.map((type, index) => (
                <li key={index}>✅ {type}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              We'll begin with <strong>{interactionSuggestions[0]}</strong> to
              help you ease into the experience.
            </p>
          </>
        ) : (
          <p>No specific interaction suggestions found for your profile.</p>
        )}

        <h3 className="mt-6 font-semibold">🎒 Matched Learning Baskets</h3>
        {getFilteredSolutions().length > 0 ? (
          <div className="mt-2">
            {getFilteredSolutions().map((sol, index) => (
              <div key={index} className="mb-4 border rounded p-3 bg-gray-50">
                <h4 className="font-semibold">{sol.Title}</h4>
                <p className="text-sm text-gray-700">{sol.Description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Interaction: {sol.InteractionType} | Language:{" "}
                  {sol.LanguageAddOn}
                </p>
                {userData && (
                  <LanguageLayer
                    goal={userData.specificGoal}
                    level={userData.dutchComfort}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm mt-2">
            No matched baskets found. Try adjusting your inputs.
          </p>
        )}

        <h3 className="mt-6 font-semibold">What’s Ahead</h3>
        <ul className="list-disc ml-6 text-sm">
          <li>Your own learning path based on real-life scenarios</li>
          <li>
            Personalized support options that match your state and strengths
          </li>
          <li>Flexible ways to build confidence and create momentum</li>
        </ul>

        <h3 className="mt-6 font-semibold">Your Opportunity</h3>
        <p className="mb-1">
          You’re at an important moment — and you don’t need to figure it out
          alone.
        </p>
        <p className="mb-2">
          With the right learning interactions, you can take control of your
          next steps, reconnect with your strengths, and open new possibilities
          — all starting from where you are now.
        </p>

        <Button onClick={onComplete}>See My Personalized Path</Button>
      </CardContent>
    </Card>
  );
};

export default OpportunityOverview;
