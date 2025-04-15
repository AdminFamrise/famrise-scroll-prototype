// src/pages/skills/communication-reasoning/Discover.js

import React from "react";
// If you're using a custom Card/Button from your UI library:
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
// If using React Router to navigate:
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">
          🟩 Discover: Communication & Reasoning
        </h1>

        {/* Real-World Situation */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">👀 A Real-World Situation</h2>
          <p className="text-gray-700">
            A parent explodes over spilled milk — but then takes a deep breath, names
            their emotion, and models a calm, constructive response. This everyday
            moment becomes a learning opportunity, showing how tone and word choice
            can diffuse tension and foster understanding.
          </p>
        </section>

        {/* What You'll Learn */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🧠 What You'll Recognize</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              How communication goes beyond just words — tone, body language, and emotional cues
            </li>
            <li>
              Why reasoning matters when making decisions that affect your family, budget, or well-being
            </li>
            <li>
              How each daily challenge can be an opportunity to practice calm, clear expression
            </li>
          </ul>
        </section>

        {/* Starter Concepts */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📚 Starter Concepts</h2>
          <p className="text-gray-700 mb-2">
            <strong>Communication:</strong> Not just grammar or vocabulary, but
            also tone, timing, body cues, and emotional awareness — so you can
            connect better with others and avoid unnecessary conflict.
          </p>
          <p className="text-gray-700">
            <strong>Reasoning:</strong> Evaluating information and options before
            responding, so you’re not reacting purely on emotion, but making
            choices that serve your goals and relationships.
          </p>
        </section>

        {/* Outcome */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎯 Outcome of This Module</h2>
          <p className="text-gray-700">
            By the end, you’ll understand why Communication and Reasoning are
            foundational to daily life — and see how to apply them in simple,
            everyday moments.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Button onClick={() => navigate("../learn")}>
            Ready to Start Learning
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Discover;

