// src/pages/skills/Practice.js

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (response.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🛠️ Practice</h1>
        <p className="text-gray-700 mb-6">
          Apply what you've learned through a short scenario and reflection task.
        </p>

        {/* Scenario Prompt */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎭 Scenario Practice</h2>
          <p className="text-sm text-gray-700 mb-2">
            Imagine you're in a team meeting. A colleague challenges your idea
            in a way that feels dismissive. What would be a thoughtful and clear
            way to respond that reflects the skill you’ve been learning?
          </p>
          <textarea
            placeholder="Write your response here..."
            className="w-full p-3 border rounded shadow-sm text-sm"
            rows={4}
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          ></textarea>
        </section>

        {/* Feedback or CTA */}
        {!submitted ? (
          <div className="text-center mt-6">
            <Button onClick={handleSubmit}>Submit Response</Button>
          </div>
        ) : (
          <div className="text-center mt-6">
            <p className="text-green-600 font-semibold mb-3">
              ✅ Great! This will help you become more confident in real-world interactions.
            </p>
            <Button onClick={() => navigate("../apply")}>Next: Apply This Skill</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Practice;

