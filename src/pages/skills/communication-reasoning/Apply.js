import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();

  // Example real-world tasks
  const realWorldTasks = [
    {
      title: "Conduct a Family Meeting",
      description:
        "Schedule a 20-minute family discussion to plan an upcoming event or resolve a small conflict. Apply calm tone, active listening, and reasoning steps to reach a decision."
    },
    {
      title: "Negotiate a Small Agreement",
      description:
        "Find a situation (like a shared purchase or weekend plan) where you can apply logical arguments and open communication to reach an agreement with a friend or partner."
    }
  ];

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🌍 Apply: Communication & Reasoning</h1>
        <p className="text-gray-700 mb-6">
          Now it’s time to take everything you’ve practiced and apply it
          to real-world tasks. Choose at least one mini-project below
          to solidify your new skills in an authentic setting.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">🚀 Real-World Mini-Projects</h2>
          <div className="space-y-4">
            {realWorldTasks.map((task, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
                <h3 className="font-medium mb-1">{task.title}</h3>
                <p className="text-sm text-gray-700">{task.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">📝 Documentation</h2>
          <p className="text-sm text-gray-700 mb-2">
            Jot down observations or outcomes from your real-world experiment.
            What worked well? What felt challenging or awkward? Any emotional triggers?
          </p>
          <p className="text-xs text-gray-500">
            (You can keep notes here, in a physical journal, or an online doc.)
          </p>
        </section>

        {/* Next Step Button */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("../reflect")}>
            Next: Reflect with Coaches or Peers
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Apply;

