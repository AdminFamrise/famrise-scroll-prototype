// src/components/forms/scenario.js

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { getUserData, mergeUserData } from "../services/UserDataService";

const Scenario = ({ onComplete }) => {
  const [formData, setFormData] = useState({ specificGoal: "" });
  const [realLifeScenario, setRealLifeScenario] = useState("");

  useEffect(() => {
    const user = getUserData();
    if (user && user.realLifeScenario) {
      setRealLifeScenario(user.realLifeScenario);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    mergeUserData(formData);
    if (onComplete) onComplete();
  };

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

  const goalList =
    realLifeScenario === "Everyday Life Skills"
      ? everydayGoals
      : realLifeScenario === "New Paths & Opportunities"
      ? newPathGoals
      : [];

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">
          🎯 Let’s Personalize Your Journey
        </h2>

        <p className="mb-2 text-sm text-gray-600">
          {realLifeScenario === "Everyday Life Skills"
            ? "Feel more confident, clear, and in control of daily life"
            : "Explore meaningful skills for the future — at your pace"}
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
            {goalList.map((goal) => (
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

export default Scenario;


