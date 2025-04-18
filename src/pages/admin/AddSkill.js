// src/pages/admin/AddSkill.js
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const AddSkill = () => {
  const [skill, setSkill] = useState({
    slug: "",
    title: "",
    category: "Growth Skills",
    realLifeScenario: "",
    tagline: "",
    overview: "",
    thumbnail: "",
    discover: {
      exampleScenario: "",
      format: "Animated slides",
      recognitionPoints: [""],
      starterConcepts: [{ term: "", definition: "" }],
      outcome: "",
    },
    learn: {
      slides: [""],
      readings: [{ title: "", description: "", link: "" }],
      videos: [{ title: "", description: "", youtube: "" }],
      selfCheck: [""],
    },
    practice: {
      scenarioPrompt: "",
      questionType: "open-ended",
      peerFeedback: false,
    },
    apply: {
      challengePrompt: "",
      exampleSteps: [""],
      recommendedExperience: "",
    },
    reflect: {
      prompts: [""],
      connectOptions: [""],
    },
    bridge: {
      description: "",
      suggestedSkills: [""],
    },
  });

  const handleChange = (path, value) => {
    const keys = path.split(".");
    setSkill((prev) => {
      const updated = { ...prev };
      let nested = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        nested = nested[keys[i]];
      }
      nested[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const handleAddToArray = (path, item) => {
    const keys = path.split(".");
    setSkill((prev) => {
      const updated = { ...prev };
      let nested = updated;
      for (let i = 0; i < keys.length; i++) {
        nested = nested[keys[i]];
      }
      nested.push(item);
      return updated;
    });
  };

  const handleSave = () => {
    if (!skill.slug) return alert("Slug is required");
    const file = new Blob([JSON.stringify(skill, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${skill.slug}.json`;
    a.click();
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        <h1 className="text-xl font-bold mb-4">Add New Skill</h1>
        <Input
          placeholder="Skill Slug"
          value={skill.slug}
          onChange={(e) => handleChange("slug", e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Skill Title"
          value={skill.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Skill Tagline"
          value={skill.tagline}
          onChange={(e) => handleChange("tagline", e.target.value)}
          className="mb-2"
        />
        <textarea
          placeholder="Skill Overview"
          value={skill.overview}
          onChange={(e) => handleChange("overview", e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Continue with other sections: discover, learn, practice, apply, reflect, bridge... */}

        <Button onClick={handleSave}>Save Skill</Button>
      </CardContent>
    </Card>
  );
};

export default AddSkill;
