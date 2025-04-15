import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

// Example: small theory modules + optional quiz placeholders
const readingResources = [
  {
    title: "Verbal vs Non-Verbal Cues",
    description:
      "Explore how tone, gesture, and eye contact matter as much as words.",
    link: "#"
  },
  {
    title: "Logical Thinking 101",
    description:
      "A short guide on applying reasoning in everyday tasks (family budgeting, scheduling).",
    link: "#"
  }
];

const videos = [
  {
    title: "Active Listening in Practice",
    description: "Watch a 2-minute demonstration of reflective listening.",
    url: "https://placeholder.video.example"
  },
  {
    title: "Using Reasoning to Solve Small Conflicts",
    description: "A short animation explaining logic in heated moments.",
    url: "https://placeholder.video.example"
  }
];

const Learn = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">📘 Learn: Communication & Reasoning</h1>
        <p className="text-gray-700 mb-6">
          Dive into the core concepts that shape how you communicate and how you
          think through everyday challenges.
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
            After skimming the articles or videos, do you feel you notice:
          </p>
          <ul className="list-disc ml-5 text-gray-700">
            <li>How tone changes meaning?</li>
            <li>Where reasoning steps are missing in daily decisions?</li>
          </ul>
          <p className="text-gray-700 mt-2 text-sm">
            (This can be replaced with a short quiz or reflection prompt.)
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

