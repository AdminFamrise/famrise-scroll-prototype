// src/pages/skills/BridgeModule.js

import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

/**
 * A generic BridgeModule that shows how a foundational skill
 * (or growth skill) links to other opportunities.
 *
 * PROPS:
 * - skillTitle: (string) The name of the skill you just completed
 * - skillDescription: (string) A short text about why bridging to next skills matters
 * - growthPaths: (array) Each item = { title, tagline, description }
 * - onComplete: (function) Fired when user finishes (e.g. returning to dashboard)
 */
const BridgeModule = ({
  skillTitle = "Unknown Skill",
  skillDescription = "",
  growthPaths = [],
  onComplete,
}) => {
  const navigate = useNavigate();

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    } else {
      // Default to dashboard if no onComplete callback
      navigate("/dashboard");
    }
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">
          🌱 Bridge Module: {skillTitle}
        </h1>

        {/* Skill bridging explanation */}
        <p className="text-gray-700 mb-6 whitespace-pre-wrap">
          {skillDescription}
        </p>

        {/* Growth Paths */}
        <section className="space-y-4 mb-8">
          {growthPaths.map((path, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-lg mb-1">{path.title}</h3>
              {path.tagline && (
                <p className="italic text-sm text-blue-600 mb-1">
                  {path.tagline}
                </p>
              )}
              <p className="text-sm text-gray-700">{path.description}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="text-center mt-6">
          <Button onClick={handleComplete}>
            Return to Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BridgeModule;
