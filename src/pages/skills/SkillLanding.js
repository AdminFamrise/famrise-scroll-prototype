// Skill Landing Page
// src/pages/skills/[skillName]/SkillLanding.js

import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const SkillLanding = ({
  title = "Skill Name",
  tagline = "Short Tagline or Real-Life Scenario",
  overview = "Why this skill matters and its real-life impact.",
  isFoundational = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-500">{tagline}</p>
      </header>

      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">Why This Skill Matters</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{overview}</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">Your Learning Journey</h2>
          <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
            <li><strong>Discover:</strong> Stories & context</li>
            <li><strong>Learn:</strong> Modules, theory, videos</li>
            <li><strong>Practice:</strong> Tasks, reflection, peer activities</li>
            <li><strong>Apply:</strong> Real-world mini-projects</li>
            <li><strong>Reflect:</strong> Coach or peer feedback</li>
          </ol>
          {isFoundational && (
            <p className="text-sm text-gray-700 mt-3">
              Includes a “Bridge” module to connect with future-focused skills.
            </p>
          )}
        </CardContent>
      </Card>

      <div className="text-center mt-8">
        <Button onClick={() => navigate("discover")}>Start My Journey</Button>
      </div>
    </div>
  );
};

export default SkillLanding;
