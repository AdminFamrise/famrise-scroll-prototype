// src/pages/admin/AddSkill.js
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

/* ------------------------------------------------------------------ */
/*  Helper utilities                                                  */
/* ------------------------------------------------------------------ */
const addItem = (state, setState, key, template) =>
  setState({ ...state, [key]: [...state[key], template] });

const updateArray = (state, setState, key, idx, field, val) => {
  const copy = [...state[key]];
  copy[idx][field] = val;
  setState({ ...state, [key]: copy });
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
const AddSkill = () => {
  const [skill, setSkill] = useState({
    // ---------- 1) Skill Info ----------
    slug: "",
    title: "",
    category: "Growth Skills",
    realLifeScenario: "",
    tagline: "",
    overview: "",
    thumbnail: "",

    // ---------- 2) Discover ------------
    discover: {
      exampleScenario: "",
      format: "Animated slides",
      recognitionPoints: [""],
      starterConcepts: [{ term: "", definition: "" }],
      outcome: ""
    },

    // ---------- 3) Learn ---------------
    learn: {
      slides: [""],
      readings: [{ title: "", description: "", link: "" }],
      videos: [{ title: "", description: "", youtube: "" }],
      selfCheck: [""],
    },

    // ---------- 4) Practice ------------
    practice: {
      scenarioPrompt: "",
      questionType: "open-ended",
      peerFeedback: false,
    },

    // ---------- 5) Apply ---------------
    apply: {
      challengePrompt: "",
      exampleSteps: [""],
      recommendedExperience: "",
    },

    // ---------- 6) Reflect -------------
    reflect: {
      prompts: [""],
      connectOptions: [""],
    },

    // ---------- 7) Bridge --------------
    bridge: {
      description: "",
      suggestedSkills: [""],
    },
  });

  /* -------------------- generic change handler ------------------- */
  const setRoot = (e) =>
    setSkill({ ...skill, [e.target.name]: e.target.value });

  /* ------------------------------- Save -------------------------- */
  const handleSave = () => {
    const fileName = `${skill.slug}.json`;
    const blob = new Blob([JSON.stringify(skill, null, 2)], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  };

  /* ------------------------------------------------------------------ */
  /*  Mark‑up                                                           */
  /* ------------------------------------------------------------------ */
  return (
    <Card className="p-6 max-w-5xl mx-auto space-y-10">
      <CardContent>
        <h1 className="text-2xl font-bold mb-6">🛠️ Add New Skill</h1>

        {/* 1️⃣ SKILL INFO ------------------------------------------------ */}
        <section className="border-l-4 border-blue-500 pl-4 mb-8">
          <h2 className="text-lg font-semibold mb-3">1️⃣ Skill Info</h2>

          <Input name="slug" placeholder="slug (e.g. ai-literacy)" value={skill.slug} onChange={setRoot} className="mb-2" />
          <Input name="title" placeholder="Skill Title" value={skill.title} onChange={setRoot} className="mb-2" />
          <Input name="category" placeholder="Category" value={skill.category} onChange={setRoot} className="mb-2" />
          <Input name="realLifeScenario" placeholder="Real‑Life Scenario" value={skill.realLifeScenario} onChange={setRoot} className="mb-2" />
          <Input name="tagline" placeholder="Tagline" value={skill.tagline} onChange={setRoot} className="mb-2" />
          <textarea name="overview" rows={3} value={skill.overview} onChange={setRoot} placeholder="Intro / Overview" className="w-full border rounded p-3 mb-2 text-sm" />
          <Input name="thumbnail" placeholder="Thumbnail URL" value={skill.thumbnail} onChange={setRoot} />
        </section>

        {/* 2️⃣ DISCOVER --------------------------------------------------- */}
        {/* ... (unchanged markup for Discover section) ... */}

        {/* 3️⃣ LEARN ------------------------------------------------------ */}
        {/* ... (unchanged markup for Learn section) ... */}

        {/* 4️⃣ PRACTICE --------------------------------------------------- */}
        {/* ... (unchanged markup for Practice section) ... */}

        {/* 5️⃣ APPLY ------------------------------------------------------ */}
        <section className="border-l-4 border-amber-600 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">5️⃣ Apply</h2>
          <textarea rows={3} className="w-full border rounded p-2 text-sm" placeholder="Real‑World Challenge Prompt" value={skill.apply.challengePrompt} onChange={(e) => setSkill({ ...skill, apply: { ...skill.apply, challengePrompt: e.target.value } })} />
          <h4 className="font-semibold mt-2">Example Steps</h4>
          {skill.apply.exampleSteps.map((st, i) => (
            <Input key={i} placeholder={`Step ${i + 1}`} value={st} onChange={(e) => {
              const arr = [...skill.apply.exampleSteps];
              arr[i] = e.target.value;
              setSkill({ ...skill, apply: { ...skill.apply, exampleSteps: arr } });
            }} className="mb-1" />
          ))}
          <Button variant="outline" onClick={() => setSkill({ ...skill, apply: { ...skill.apply, exampleSteps: [...skill.apply.exampleSteps, ""] } })}>
            Add Step
          </Button>
          <Input placeholder="Recommended Experience" value={skill.apply.recommendedExperience} onChange={(e) => setSkill({ ...skill, apply: { ...skill.apply, recommendedExperience: e.target.value } })} className="mt-2" />
        </section>

        {/* 6️⃣ REFLECT ---------------------------------------------------- */}
        <section className="border-l-4 border-teal-600 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">6️⃣ Reflect</h2>
          {skill.reflect.prompts.map((p, i) => (
            <Input key={i} placeholder={`Prompt ${i + 1}`} value={p} onChange={(e) => {
              const arr = [...skill.reflect.prompts];
              arr[i] = e.target.value;
              setSkill({ ...skill, reflect: { ...skill.reflect, prompts: arr } });
            }} className="mb-1" />
          ))}
          <Button variant="outline" onClick={() => setSkill({ ...skill, reflect: { ...skill.reflect, prompts: [...skill.reflect.prompts, ""] } })}>
            Add Prompt
          </Button>

          <h4 className="font-semibold mt-3">Connect Options</h4>
          {skill.reflect.connectOptions.map((o, i) => (
            <Input key={i} placeholder={`Option ${i + 1}`} value={o} onChange={(e) => {
              const arr = [...skill.reflect.connectOptions];
              arr[i] = e.target.value;
              setSkill({ ...skill, reflect: { ...skill.reflect, connectOptions: arr } });
            }} className="mb-1" />
          ))}
          <Button variant="outline" onClick={() => setSkill({ ...skill, reflect: { ...skill.reflect, connectOptions: [...skill.reflect.connectOptions, ""] } })}>
            Add Option
          </Button>
        </section>

        {/* 7️⃣ BRIDGE ----------------------------------------------------- */}
        <section className="border-l-4 border-gray-500 pl-4 mb-8 space-y-2">
          <h2 className="text-lg font-semibold">7️⃣ Bridge</h2>
          <textarea rows={3} className="w-full border rounded p-2 text-sm" placeholder="Bridge Description" value={skill.bridge.description} onChange={(e) => setSkill({ ...skill, bridge: { ...skill.bridge, description: e.target.value } })} />
          <h4 className="font-semibold mt-2">Suggested Skills</h4>
          {skill.bridge.suggestedSkills.map((s, i


