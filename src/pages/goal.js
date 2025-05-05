import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { mergeUserData } from "../services/UserDataService";

const GoalPage = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState("");
  const [customGoal, setCustomGoal] = useState("");

  const predefinedGoals = [
    "Build a flexible side income",
    "Earn a certification",
    "Boost my emotional resilience",
    "Guide my kids’ learning"
  ];

  const handleTileClick = (goal) => {
    setSelectedGoal(goal);
    setCustomGoal("");
  };

  const handleCustomFocus = () => {
    setSelectedGoal("other");
  };

  const handleCustomChange = (e) => {
    setCustomGoal(e.target.value);
  };

  const handleSubmit = () => {
    const goalValue = selectedGoal === "other" ? customGoal : selectedGoal;
    if (!goalValue) return;
    mergeUserData({ goal: goalValue });
    navigate("/dashboard");
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        {/* Progress Indicator */}
        <p className="text-sm text-gray-500 mb-4">Step 3 of 3</p>

        {/* Headline */}
        <h2 className="text-2xl font-bold mb-4">
          Choose your top goal for the next 3 months
        </h2>

        {/* Predefined Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {predefinedGoals.map((goal) => (
            <button
              key={goal}
              type="button"
              onClick={() => handleTileClick(goal)}
              className={`p-4 border rounded transition text-left 
                ${selectedGoal === goal
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-100 text-gray-800 border-gray-300'}
              `}
            >
              {goal}
            </button>
          ))}
          <button
            type="button"
            onClick={handleCustomFocus}
            className={`p-4 border-dashed rounded transition text-left 
              ${selectedGoal === 'other'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-100 text-gray-800 border-gray-300'}
            `}
          >
            My own goal →
          </button>
        </div>

        {/* Custom Goal Input */}
        {selectedGoal === 'other' && (
          <Input
            name="customGoal"
            placeholder="Enter your goal"
            value={customGoal}
            onChange={handleCustomChange}
            className="mb-4"
          />
        )}

        {/* Helper Copy */}
        <p className="text-sm text-gray-500 mb-6">
          You can always add more goals later in your dashboard.
        </p>

        {/* Continue Button */}
        <Button onClick={handleSubmit} disabled={!selectedGoal || (selectedGoal === 'other' && !customGoal)}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};

export default GoalPage;
