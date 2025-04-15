import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const navigate = useNavigate();

  // Sample scenario tasks for variety
  const scenarioTasks = [
    {
      title: "Scenario: Heated Family Discussion",
      description:
        "Your partner disagrees on vacation plans. Practice using calm tone, reflection of their viewpoint, and logical compromise to defuse tension."
    },
    {
      title: "Scenario: Workplace Constraint",
      description:
        "Your boss wants a quick decision on a project. Outline 2–3 reasoning steps before you respond, balancing personal limits and company goals."
    }
  ];

  // Example of journaling prompts for reflection
  const journalingPrompts = [
    "Identify one recent conflict. How did communication shape the outcome?",
    "Write down a moment you paused to think logically before reacting. Did it help?",
    "Note a time you used different tone or language choice — what changed?"
  ];

  // Peer Challenge examples
  const peerChallenges = [
    "Find a friend or colleague and discuss a 10-minute scenario. Try 'active listening' — reflect their words back to them.",
    "Organize a quick role-play with a partner, focusing on calm communication under fake stress (like a missed deadline)."
  ];

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🧪 Practice: Communication & Reasoning</h1>
        <p className="text-gray-700 mb-6">
          In this step, you’ll deepen your skills by trying out scenario-based tasks,
          journaling prompts, and peer challenges. Variety helps you solidify what you learned.
        </p>

        {/* Scenario Tasks */}
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
            (Feel free to record responses in a physical journal or a notes app.)
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

