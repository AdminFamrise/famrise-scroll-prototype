// src/pages/scenario/opportunities.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { mergeUserData } from "../../services/UserDataService";

const OpportunitiesScenarioPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ specificGoal: "" });

  const newPathGoals = [
    "AI & Emerging Tech Awareness",
    "Digital world protection",
    "Turn Screen Time into Skill Time",
    "Make Smarter Decisions with Data",
    "Learn to Code or Automate Without Fear",
    "Live Sustainably, Think Circular",
    "Discover Tech Without Being a Techie",
    "Create, Lead, or Grow a Flexible Career",
    "Build What Your Community or Market Needs",
  ];

  const handleChange = (e) => {
    setFormData({ specificGoal: e.target.value });
  };

  const handleSubmit = () => {
    mergeUserData(formData);
    navigate("/overview");
  };

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">
          🎯 Let’s Personalize Your Journey
        </h2>
        <p className="mb-2 text-sm text-gray-600">
          Explore meaningful skills for the future — at your pace
        </p>

        <div className="mb-6">
          <label className="font-semibold block mb-1">
            What would you like to focus on next?
          </label>
          <select
            name="specificGoal"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a focus area</option>
            {newPathGoals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>
        </div>

        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default OpportunitiesScenarioPage;
