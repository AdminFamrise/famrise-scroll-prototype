// src/pages/skills/Learn.js

import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

// Example: small theory modules + optional quiz placeholders
const readingResources = [
  {
    title: "Topic A Overview",
    description:
      "Explore how subtle details matter just as much as the main concepts.",
    link: "#"
  },
  {
    title: "Deeper Insight on Topic B",
    description:
      "A short guide on applying principles in everyday tasks (budgeting, scheduling, or planning).",
    link: "#"
  }
];

const videos = [
  {
    title: "Real-Life Application Demo",
    description: "Watch a short demonstration of how these concepts play out.",
    url: "https://placeholder.video.example"
  },
  {
    title: "Handling Challenges",
    description: "A short animation showing how to handle tricky scenarios.",
    url: "https://placeholder.video.example"
  }
];

const Learn = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">📘 Learn: [Skill Title Here]</h1>
        <p className="text-gray-700 mb-6">
          Dive into the core concepts that shape how you approach this skill and 
          how it impacts your daily challenges.
        </p>

        {/* Reading Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📚 Reading & Articles</h2>
          <ul className="list-disc ml-5">
            {readingResources.map((item, idx) => (
              <li key={idx} className="mb-2">
                <strong>{item.title}:</strong> {item.description}{" "}
                <a href={item.link} className="text-blue-600 underline">
                  (Read More)
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎬 Short Videos</h2>
          <ul className="list-disc ml-5">
            {videos.map((vid, idx) => (
              <li key={idx} className="mb-2">
                <strong>{vid.title}:</strong> {vid.description}{" "}
                <a href={vid.url} className="text-blue-600 underline">
                  (Watch)
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Optional Self-Check or Quiz */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🧩 Quick Self-Check</h2>
          <p className="text-gray-700 mb-2">
            After reviewing the articles or videos, do you notice any of the following?
          </p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Areas where subtle changes in approach matter?</li>
            <li>Where additional steps could enhance the outcome?</li>
          </ul>
          <p className="text-gray-700 mt-2 text-sm">
            (You can replace this with a short quiz or reflection prompt if desired.)
          </p>
        </section>

        {/* 'Next Up' Progress Component (Placeholder) */}
        <section className="mb-6 border p-4 bg-gray-50 rounded">
          <h2 className="text-xl font-semibold mb-2">🌐 Next Up</h2>
          <p className="text-sm text-gray-700">
            You’ve completed the <strong>Learn</strong> phase. 
            Up next, you’ll head over to <strong>Practice</strong>, 
            where you can try scenario-based tasks and peer challenges.
          </p>
        </section>

        {/* CTA to Next Step */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("../practice")}>
            Next: Practice Your Skills
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Learn;


