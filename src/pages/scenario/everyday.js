// src/pages/scenario/everyday.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { mergeUserData } from "../../services/UserDataService";

const EverydayScenarioPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ specificGoal: "" });

  const everydayGoals = [
    "Speak & Think with Clarity",
    "Learn What You Need, When You Need It",
    "Make Smart Money & Planning Decisions",
    "Work Better with Others",
    "Handle Change with More Ease",
    "Choose What Works for You",
    "Fix What’s Not Working",
    "Take Initiative in Small Ways",
    "Understand Emotions — Yours & Others",
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
          Feel more confident, clear, and in control of daily life
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
            {everydayGoals.map((goal) => (
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

export default EverydayScenarioPage;
