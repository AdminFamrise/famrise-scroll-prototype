// src/components/language/LanguageLayer.js

import React from "react";
import { Card, CardContent } from "../ui/Card";

// Example language integration ideas per language
const languageIdeas = {
  Dutch: [
    {
      emoji: "🔤",
      label: "Use it in Dutch",
      description:
        "Say or write one phrase related to your task in Dutch (e.g., greeting, idiom).",
    },
    {
      emoji: "💡",
      label: "Hear it in Dutch",
      description: "Listen to a short audio clip or word used in context.",
    },
    {
      emoji: "✍️",
      label: "Reflect in Dutch",
      description:
        "Write one sentence or keyword in Dutch during the reflection step.",
    },
    {
      emoji: "📂",
      label: "Dutch in Action Words",
      description:
        "Learn 2–3 task-specific words in Dutch with their real-life use (school, recycling, etc.).",
    },
    {
      emoji: "💬",
      label: "Try it in Conversation",
      description:
        "Insert one Dutch phrase into a real-world interaction this week.",
    },
    {
      emoji: "📱",
      label: "Digital Dutch Moment",
      description:
        "Switch one of your apps or phone settings into Dutch temporarily.",
    },
    {
      emoji: "🔁",
      label: "Repeat It This Week",
      description:
        "Try using the new Dutch word or phrase 3 times in daily life.",
    },
  ],
  English: [
    {
      emoji: "🔤",
      label: "Use it in English",
      description:
        "Say or write one phrase related to your task in English (e.g., greeting, idiom).",
    },
    {
      emoji: "💡",
      label: "Hear it in English",
      description: "Listen to a short audio clip or word used in context.",
    },
    {
      emoji: "✍️",
      label: "Reflect in English",
      description:
        "Write one sentence or keyword in English during the reflection step.",
    },
    // Add more English-specific tips here, or replicate the same ones as Dutch
  ],
};

const LanguageLayer = ({ languageAddOn }) => {
  if (!languageAddOn) return null;

  const tips = languageIdeas[languageAddOn];
  if (!tips) return null; // no tips defined for that language

  return (
    <Card className="mt-4 bg-yellow-50 border-yellow-300 border">
      <CardContent>
        <h3 className="text-md font-semibold mb-2">
          🌐 Practice {languageAddOn} While You Learn
        </h3>
        <p className="text-sm mb-3">
          Here are some {languageAddOn} integration ideas for this module:
        </p>
        <ul className="space-y-2 text-sm">
          {tips.map((tip, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-lg">{tip.emoji}</span>
              <div>
                <strong>{tip.label}:</strong> {tip.description}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LanguageLayer;

