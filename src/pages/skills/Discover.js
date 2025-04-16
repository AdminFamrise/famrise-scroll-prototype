// src/pages/skills/Discover.js

import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">🟩 Discover</h1>

        {/* Real-World Situation */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">👀 A Real-World Situation</h2>
          <p className="text-gray-700">
            Imagine a moment of tension in daily life — a child spills milk, a colleague interrupts your point, a bus runs late. How you respond becomes a learning opportunity. 
            This module shows how simple moments are chances to practice your skill with awareness and clarity.
          </p>
        </section>

        {/* What You'll Recognize */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🧠 What You'll Recognize</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>How everyday moments connect with this skill</li>
            <li>Why building awareness leads to better responses</li>
            <li>How small shifts in behavior can improve outcomes</li>
          </ul>
        </section>

        {/* Starter Concepts */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📚 Starter Concepts</h2>
          <p className="text-gray-700 mb-2">
            <strong>Term 1:</strong> Short explanation of a foundational idea tied to this skill.
          </p>
          <p className="text-gray-700">
            <strong>Term 2:</strong> A second principle or tool that the learner will use throughout their journey.
          </p>
        </section>

        {/* Outcome */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎯 Outcome of This Module</h2>
          <p className="text-gray-700">
            By the end, you’ll connect the skill with your personal life — and feel more confident about practicing it in real-world situations.
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


