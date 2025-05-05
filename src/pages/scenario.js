import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { mergeUserData } from "../../services/UserDataService";

const ScenarioPage = () => {
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState("");
  const inputRef = useRef(null);

  const suggestions = [
    "Manage my time better",
    "Switch to remote work",
    "Help my child with homework",
  ];

  const handleChange = (e) => {
    setChallenge(e.target.value);
  };

  const handleSuggestionClick = (text) => {
    setChallenge(text);
  };

  const handleOtherClick = () => {
    setChallenge("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = () => {
    mergeUserData({ challenge });
    navigate("/onboarding/step3");
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        {/* Progress Indicator */}
        <p className="text-sm text-gray-500 mb-4">Step 2 of 3</p>

        {/* Headline */}
        <h2 className="text-2xl font-bold mb-4">
          What’s the one real problem you want to solve?
        </h2>

        {/* Text Input */}
        <Input
          name="challenge"
          placeholder="Type your challenge here"
          value={challenge}
          onChange={handleChange}
          ref={inputRef}
          className="mb-4"
        />

        {/* Quick-pick Suggestions */}
        <div className="flex flex-col gap-2 mb-6">
          {suggestions.map((text) => (
            <button
              key={text}
              type="button"
              onClick={() => handleSuggestionClick(text)}
              className="text-left px-4 py-2 border rounded hover:bg-gray-100 transition"
            >
              {text}
            </button>
          ))}
          <button
            type="button"
            onClick={handleOtherClick}
            className="text-left px-4 py-2 border-dashed border rounded text-gray-600 hover:bg-gray-100 transition"
          >
            Something else? Tell us…
          </button>
        </div>

        {/* Continue Button */}
        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default ScenarioPage;
