import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { mergeUserData } from "../services/UserDataService";

const GoalPage = () => {
  const navigate = useNavigate();

  const [selectedGoal, setSelectedGoal] = useState("");
  const [customGoal, setCustomGoal] = useState("");

  const predefinedGoals = [
    "Build a flexible side income",
    "Earn a certification",
    "Boost my emotional resilience",
    "Guide my kids’ learning",
  ];

  const handleTileClick = (goal) => {
    setSelectedGoal(goal);
    setCustomGoal("");
  };

  const handleCustomFocus = () => setSelectedGoal("other");

  const handleCustomChange = (e) => setCustomGoal(e.target.value);

  /* ───────────────────────────────────────────────
     Save as { goal: "…" }  ➜  then navigate
  ──────────────────────────────────────────────── */
  const handleSubmit = () => {
    const goalValue = selectedGoal === "other" ? customGoal.trim() : selectedGoal;
    if (!goalValue) return;
    mergeUserData({ goal: goalValue });
    navigate("/skill-snapshot");
  };

  const canContinue =
    selectedGoal && (selectedGoal !== "other" || customGoal.trim());

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">Step 3 of 4</p>

        <h2 className="text-2xl font-bold mb-4">
          Choose your top goal for the next 3&nbsp;months
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {predefinedGoals.map((goal) => (
            <button
              key={goal}
              type="button"
              onClick={() => handleTileClick(goal)}
              className={`p-4 border rounded transition text-left 
                ${
                  selectedGoal === goal
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 text-gray-800 border-gray-300"
                }`}
            >
              {goal}
            </button>
          ))}

          <button
            type="button"
            onClick={handleCustomFocus}
            className={`p-4 border-dashed rounded transition text-left 
              ${
                selectedGoal === "other"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }`}
          >
            My own goal →
          </button>
        </div>

        {selectedGoal === "other" && (
          <Input
            name="customGoal"
            placeholder="Enter your goal"
            value={customGoal}
            onChange={handleCustomChange}
            className="mb-4"
          />
        )}

        <p className="text-sm text-gray-500 mb-6">
          You can always add more goals later in your dashboard.
        </p>

        <Button onClick={handleSubmit} disabled={!canContinue}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};

export default GoalPage;


