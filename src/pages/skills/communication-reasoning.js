import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

const CommunicationReasoning = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      {/* Title Section */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">
          Communication & Reasoning
        </h1>
        <p className="text-sm text-gray-500">
          Real-life scenario: Speak & Think with Clarity
        </p>
      </header>

      {/* Theoretical Concepts Section */}
      <Card className="mb-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-3">📘 Theoretical Concepts</h2>

          <h3 className="font-medium mb-1">1. Communication</h3>
          <ul className="list-disc ml-5 text-sm mb-4">
            <li>Clearly express ideas, understand others, and build social connections</li>
            <li>Includes verbal, non-verbal, language fluency, and cultural awareness</li>
            <li>Focus: pragmatic use of language (tone, idioms, body language)</li>
          </ul>

          <h3 className="font-medium mb-1">2. Reasoning</h3>
          <ul className="list-disc ml-5 text-sm">
            <li>Evaluate information, weigh options, and make informed decisions</li>
            <li>Involves logic, adaptive thinking, and problem-solving</li>
            <li>Focus: applying logic to real-life constraints (budget, family needs, etc.)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Button>Start Skill Journey</Button>
      </div>
    </div>
  );
};

export default CommunicationReasoning;
