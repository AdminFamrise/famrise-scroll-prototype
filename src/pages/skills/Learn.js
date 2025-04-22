// src/pages/skills/Learn.js

import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const readingModules = [
  {
    title: "🌱 Foundation: Awareness in Action",
    content: "Understanding how everyday choices shape outcomes."
  },
  {
    title: "🔍 Micro-Decisions",
    content: "The role of attention and decision-making in skill-building."
  }
];

const videos = [
  {
    title: "🎥 Scenario Simulation",
    url: "https://www.youtube.com/watch?v=Vs-MyQgfH3A",
    description: "Observe real-world use of the skill in action."
  },
  {
    title: "🎥 Common Mistakes & Fixes",
    url: "https://www.youtube.com/watch?v=eVDMATVzhTk",
    description: "Learn how to spot and fix typical mistakes."
  }
];

const Learn = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4">📘 Learn</h1>
        <p className="text-gray-700 mb-6">
          This step includes short lessons, real-life video demos, and reflection questions.
        </p>

        {/* Reading Blocks */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">📚 Theory Modules</h2>
          <div className="space-y-4">
            {readingModules.map((mod, idx) => (
              <div key={idx} className="border rounded p-4 bg-gray-50">
                <h3 className="font-semibold mb-1">{mod.title}</h3>
                <p className="text-sm text-gray-700">{mod.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Embeds */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">🎬 Video Demos</h2>
          <div className="space-y-6">
            {videos.map((video, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.description}</p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-64"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reflection Prompt */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🧩 Self-Reflection</h2>
          <p className="text-sm text-gray-700 mb-2">
            Which concept challenged you the most? Can you recall a moment when this would’ve helped?
          </p>
          <textarea
            placeholder="Write a few thoughts..."
            className="w-full p-3 border rounded shadow-sm text-sm"
            rows={4}
          ></textarea>
        </section>

        {/* CTA to Practice */}
        <div className="text-center">
          <Button onClick={() => navigate("../practice")}>Next: Practice Your Skills</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Learn;



