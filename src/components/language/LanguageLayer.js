// src/components/language/LanguageLayer.js

import React from "react";
import { Card, CardContent } from "../ui/Card";

// Language Integration Tags
const tags = [
  {
    emoji: "🔤",
    label: "Use it in Dutch",
    description: "Say or write 1 phrase related to the task in Dutch (e.g., greeting, idiom).",
  },
  {
    emoji: "💡",
    label: "Hear it in Dutch",
    description: "Listen to a short audio clip or word used in context.",
  },
  {
    emoji: "✍️",
    label: "Reflect in Dutch",
    description: "Write one sentence or keyword in Dutch during the reflection step.",
  },
  {
    emoji: "📂",
    label: "Dutch in Action Words",
    description: "Learn 2–3 task-specific words in Dutch with their real-life use (e.g., school, recycling).",
  },
  {
    emoji: "💬",
    label: "Try it in Conversation",
    description: "Insert one Dutch phrase into a real-world interaction.",
  },
  {
    emoji: "📱",
    label: "Digital Dutch Moment",
    description: "Switch your app/system into Dutch during a task (e.g., Google Maps, phone settings).",
  },
  {
    emoji: "🔁",
    label: "Repeat It This Week",
    description: "Try using the new Dutch word or phrase 3 more times in your life this week.",
  },
];

const LanguageLayer = ({ goal, level }) => {
  // Show this layer only if Dutch was selected
  if (!level || !level.toLowerCase().includes("dutch")) return null;

  return (
    <Card className="mt-4 bg-yellow-50 border-yellow-300 border">
      <CardContent>
        <h3 className="text-md font-semibold mb-2">
          🇳🇱 Practice Dutch While You Learn
        </h3>
        <p className="text-sm mb-3">
          Based on your selected language add-on, here are Dutch integration ideas for this module:
        </p>
        <ul className="space-y-2 text-sm">
          {tags.map((tag, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-lg">{tag.emoji}</span>
              <div>
                <strong>{tag.label}:</strong> {tag.description}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LanguageLayer;

