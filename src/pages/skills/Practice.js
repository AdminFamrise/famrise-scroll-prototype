// src/pages/skills/Practice.js

import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const navigate = useNavigate();

  // Placeholder scenario tasks
  const scenarioTasks = [
    {
      title: "Scenario: Everyday Challenge",
      description:
        "Imagine a common situation where this skill is needed. Walk through how you would respond or adapt using what you've learned."
    },
    {
      title: "Scenario: Pressure Moment",
      description:
        "You must react quickly under pressure. What thought process or behavior can you try differently this time?"
    }
  ];

  // Placeholder journaling prompts
  const journalingPrompts = [
    "Reflect on a recent situation. How would using this skill change the outcome?",
    "Describe a moment you felt stuck — what skill-based strategy could help next time?",
    "When have you used this skill naturally without noticing?"
  ];

  // Peer challenge ideas
  const peerChallenges = [
    "Explain this skill to a friend in your own words. Let them ask questions.",
    "Try a 5-minute role-play with a peer, applying the skill in a made-up challenge.",
    "Observe someone else and note how they use this skill (or not). Share your reflections."
  ];

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🧪 Practice</h1>
        <p className="text-gray-700 mb-6">
          In this phase, you'll try hands-on activities to strengthen your new skill. 
          Practice helps make knowledge stick through real scenarios, journaling, and peer interaction.
        </p>

        {/* Scenario-Based Tasks */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">⚗️ Scenario-Based Tasks</h2>
          <div className="space-y-4">
            {scenarioTasks.map((task, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
                <h3 className="font-medium mb-1">{task.title}</h3>
                <p className="text-sm text-gray-700">{task.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Journaling Prompts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">📔 Journaling Prompts</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {journalingPrompts.map((prompt, i) => (
              <li key={i}>{prompt}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-2">
            (You can write these in your personal journal or digital notes.)
          </p>
        </section>

        {/* Peer Challenges */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">🤝 Peer Challenge Ideas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {peerChallenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </section>

        {/* CTA to Next Step */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("../apply")}>
            Next: Apply to Real-World Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Practice;

