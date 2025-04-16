// src/pages/skills/Apply.js

import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();

  const realWorldTasks = [
    {
      title: "Run a Micro-Project",
      description:
        "Choose a small, achievable action related to this skill — such as leading a conversation, organizing something, or applying it to a task at home or work.",
    },
    {
      title: "Facilitate a Real-Life Decision",
      description:
        "Identify a low-stakes challenge and intentionally apply the skill in how you evaluate, communicate, or collaborate with others.",
    },
  ];

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🌍 Apply: Real-World Tasks</h1>
        <p className="text-gray-700 mb-6">
          Now it’s time to move beyond theory. Choose a real-world micro-project where
          you can test and apply this skill in a meaningful way.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">🚀 Suggested Mini-Projects</h2>
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
          <h2 className="text-xl font-semibold mb-3">📝 Document Your Experience</h2>
          <p className="text-sm text-gray-700 mb-2">
            Write down your experience — what went well, what you’d do differently,
            and what surprised you about yourself or others.
          </p>
          <p className="text-xs text-gray-500">
            (Use a notebook, notes app, or share in your peer group later.)
          </p>
        </section>

        <div className="text-center mt-6">
          <Button onClick={() => navigate("../reflect")}>
            Next: Reflect with a Coach or Peer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Apply;
