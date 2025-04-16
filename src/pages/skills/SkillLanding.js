// src/pages/skills/[skillName]/SkillLanding.js

import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
// If you’re using React Router for navigation:
import { useNavigate } from "react-router-dom";

const SkillLanding = ({
  title = "Skill Name",
  tagline = "Short Tagline or Real-Life Scenario",
  overview = "A brief paragraph describing why this skill matters and its impact on daily life or work.",
  isFoundational = true // or false, to conditionally mention Bridge
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      {/* Title / Subtitle */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-500">{tagline}</p>
      </header>

      {/* Skill Overview */}
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">Why This Skill Matters</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">
            {overview}
          </p>
        </CardContent>
      </Card>

      {/* 5-Step Journey Outline */}
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">Your Learning Journey</h2>
          <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
            <li>
              <strong>Discover:</strong> Real-life stories highlighting why the skill matters
            </li>
            <li>
              <strong>Learn:</strong> Modules covering theory, readings, short videos
            </li>
            <li>
              <strong>Practice:</strong> Scenario tasks, journaling, peer challenges
            </li>
            <li>
              <strong>Apply:</strong> Real-world mini-project(s)
            </li>
            <li>
              <strong>Reflect:</strong> Share with a coach or peer, possibly earn a digital badge
            </li>
          </ol>
          {isFoundational && (
            <p className="text-sm text-gray-700 mt-3">
              As a foundational skill, you'll also find a final “Bridge” module 
              connecting it to growth-oriented skills.
            </p>
          )}
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center mt-8">
        <Button onClick={() => navigate("discover")}>Start My Journey</Button>
      </div>
    </div>
  );
};

export default SkillLanding;
