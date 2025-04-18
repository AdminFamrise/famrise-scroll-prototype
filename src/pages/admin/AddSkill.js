// src/pages/admin/AddSkill.js
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

/* ------------------------------------------------------------
   Utility helpers
------------------------------------------------------------ */
const pushItem = (stateSetter, path, template) => {
  stateSetter((prev) => {
    const copy = JSON.parse(JSON.stringify(prev));
    let ref = copy;
    for (let i = 0; i < path.length - 1; i++) ref = ref[path[i]];
    ref[path[path.length - 1]].push(template);
    return copy;
  });
};

const updateNested = (stateSetter, path, updater) => {
  stateSetter((prev) => {
    const copy = JSON.parse(JSON.stringify(prev));
    let ref = copy;
    for (let i = 0; i < path.length - 1; i++) ref = ref[path[i]];
    ref[path[path.length - 1]] = updater(ref[path[path.length - 1]]);
    return copy;
  });
};

/* ------------------------------------------------------------
   Component
------------------------------------------------------------ */
const AddSkill = () => {
  /* -------- master state -------- */
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

  /* -------- root field change -------- */
  const setRoot = (e) =>
    setSkill({ ...skill, [e.target.name]: e.target.value });

  /* -------- JSON download -------- */
  const handleSave = () => {
    if (!skill.slug) {
      alert("Please add a slug before saving");
      return;
    }
    const blob = new Blob([JSON.stringify(skill, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${skill.slug}.json`;
    a.click();
  };

  /* ------------------------------------------------------------ */
  /*  Render helper pieces                                         */
  /* ------------------------------------------------------------ */
  const renderStringArray = (arr, path) => (
    <>
      {arr.map((val, idx) => (
        <Input
          key={idx}
          value={val}
          placeholder={`Item ${idx + 1}`}
          className="mb-1"
          onChange={(e) =>
            updateNested(setSkill, path, (list) => {
              const copy = [...list];
              copy[idx] = e.target.value;
              return copy;
            })
          }
        />
      ))}
      <Button
        variant="outline"
        onClick={() => pushItem(setSkill, path, "")}
      >
        Add Item
      </Button>
    </>
  );

  /* ------------------------------------------------------------ */
  /*  JSX                                                          */
  /* ------------------------------------------------------------ */
  return (
    <Card className="p-6 max-w-5xl mx-auto space-y-10">
      <CardContent>
        <h1 className="text-2xl font-bold mb-6">🛠️ Add New Skill</h1>

        {/* 1️⃣ Skill Info */}
        <section className="border-l-4 border-blue-500 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">1️⃣ Skill Info</h2>
          {[
            { name: "slug", ph: "slug (e.g. ai-literacy)" },
            { name: "title", ph: "Skill Title" },
            { name: "category", ph: "Category" },
            { name: "realLifeScenario", ph: "Real‑Life Scenario" },
            { name: "tagline", ph: "Tagline" },
          ].map((f) => (
            <Input
              key={f.name}
              name={f.name}
              value={skill[f.name]}
              placeholder={f.ph}
              onChange={setRoot}
            />
          ))}
          <textarea
            name="overview"
            rows={3}
            value={skill.overview}
            placeholder="Intro / Overview"
            className="w-full border rounded p-2 text-sm"
            onChange={setRoot}
          />
          <Input
            name="thumbnail"
            value={skill.thumbnail}
            placeholder="Thumbnail URL"
            onChange={setRoot}
          />
        </section>

        {/* 2️⃣ Discover */}
        <section className="border-l-4 border-green-600 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">2️⃣ Discover</h2>
          <Input
            placeholder="Example Scenario"
            value={skill.discover.exampleScenario}
            onChange={(e) =>
              setSkill({
                ...skill,
                discover: { ...skill.discover, exampleScenario: e.target.value },
              })
            }
          />
          <Input
            placeholder="Format"
            value={skill.discover.format}
            onChange={(e) =>
              setSkill({
                ...skill,
                discover: { ...skill.discover, format: e.target.value },
              })
            }
          />
          <h4 className="font-semibold">Recognition Points</h4>
          {renderStringArray(skill.discover.recognitionPoints, ["discover", "recognitionPoints"])}

          <h4 className="font-semibold mt-3">Starter Concepts</h4>
          {skill.discover.starterConcepts.map((sc, i) => (
            <div key={i} className="flex gap-2 mb-1">
              <Input
                placeholder="Term"
                value={sc.term}
                onChange={(e) =>
                  updateNested(setSkill, ["discover", "starterConcepts"], (list) => {
                    const copy = [...list];
                    copy[i].term = e.target.value;
                    return copy;
                  })
                }
              />
              <Input
                placeholder="Definition"
                value={sc.definition}
                onChange={(e) =>
                  updateNested(setSkill, ["discover", "starterConcepts"], (list) => {
                    const copy = [...list];
                    copy[i].definition = e.target.value;
                    return copy;
                  })
                }
              />
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              pushItem(setSkill, ["discover", "starterConcepts"], {
                term: "",
                definition: "",
              })
            }
          >
            Add Concept
          </Button>
          <textarea
            rows={2}
            className="w-full border rounded p-2 text-sm mt-2"
            placeholder="Module Outcome"
            value={skill.discover.outcome}
            onChange={(e) =>
              setSkill({
                ...skill,
                discover: { ...skill.discover, outcome: e.target.value },
              })
            }
          />
        </section>

        {/* 3️⃣ Learn */}
        <section className="border-l-4 border-yellow-500 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">3️⃣ Learn</h2>

          {/* Slides */}
          <h4 className="font-semibold">Slides</h4>
          {renderStringArray(skill.learn.slides, ["learn", "slides"])}

          {/* Readings */}
          <h4 className="font-semibold mt-3">Readings / Articles</h4>
          {skill.learn.readings.map((r, i) => (
            <div key={i} className="mb-2">
              {[
