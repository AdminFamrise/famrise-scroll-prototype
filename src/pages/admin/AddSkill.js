// src/pages/admin/AddSkill.js
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const AddSkill = () => {
  const [skill, setSkill] = useState({
    // 1️⃣ Skill Info
    slug: "",
    title: "",
    category: "Growth Skills",
    realLifeScenario: "",
    tagline: "",
    overview: "",
    thumbnail: "",
    // 2️⃣ Discover
    discover: {
      exampleScenario: "",
      format: "Animated slides",
      recognitionPoints: [""],
      starterConcepts: [{ term: "", definition: "" }],
      outcome: "",
    },
    // 3️⃣ Learn
    learn: {
      slides: [""],
      readings: [{ title: "", description: "", link: "" }],
      videos: [{ title: "", description: "", youtube: "" }],
      selfCheck: [""],
    },
    // 4️⃣ Practice
    practice: {
      scenarioPrompt: "",
      questionType: "open-ended",
      peerFeedback: false,
    },
    // 5️⃣ Apply
    apply: {
      challengePrompt: "",
      exampleSteps: [""],
      recommendedExperience: "",
    },
    // 6️⃣ Reflect
    reflect: {
      prompts: [""],
      connectOptions: [""],
    },
    // 7️⃣ Bridge
    bridge: {
      description: "",
      suggestedSkills: [""],
    },
  });

  // Generic setter for top‑level fields
  const setField = (name, value) =>
    setSkill((s) => ({ ...s, [name]: value }));

  // Setter for nested fields, by path array
  const setNested = (path, value) =>
    setSkill((s) => {
      const copy = JSON.parse(JSON.stringify(s));
      let cur = copy;
      for (let i = 0; i < path.length - 1; i++) cur = cur[path[i]];
      cur[path[path.length - 1]] = value;
      return copy;
    });

  // Push an item into a nested array field
  const addItem = (path, template) =>
    setNested(path, [
      ...path.reduce((acc, k) => acc[k], skill),
      template,
    ]);

  // Save JSON
  const handleSave = () => {
    if (!skill.slug.trim()) {
      alert("Please enter a slug.");
      return;
    }
    const blob = new Blob([JSON.stringify(skill, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${skill.slug}.json`;
    a.click();
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto space-y-8">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🛠️ Add New Skill</h1>

        {/* 1️⃣ Skill Info */}
        <section className="space-y-2">
          <h2 className="font-semibold">1️⃣ Skill Info</h2>
          <div className="flex gap-2">
            <Input
              placeholder="Slug (e.g. ai-literacy)"
              value={skill.slug}
              onChange={(e) => setField("slug", e.target.value)}
            />
            <Input
              placeholder="Title"
              value={skill.title}
              onChange={(e) => setField("title", e.target.value)}
            />
          </div>
          <Input
            placeholder="Category"
            value={skill.category}
            onChange={(e) => setField("category", e.target.value)}
          />
          <Input
            placeholder="Real‑Life Scenario"
            value={skill.realLifeScenario}
            onChange={(e) =>
              setField("realLifeScenario", e.target.value)
            }
          />
          <Input
            placeholder="Tagline"
            value={skill.tagline}
            onChange={(e) => setField("tagline", e.target.value)}
          />
          <textarea
            placeholder="Overview"
            className="w-full p-2 border rounded"
            rows={3}
            value={skill.overview}
            onChange={(e) => setField("overview", e.target.value)}
          />
          <Input
            placeholder="Thumbnail URL"
            value={skill.thumbnail}
            onChange={(e) => setField("thumbnail", e.target.value)}
          />
        </section>

        {/* 2️⃣ Discover */}
        <section className="space-y-2">
          <h2 className="font-semibold">2️⃣ Discover</h2>
          <Input
            placeholder="Example Scenario"
            value={skill.discover.exampleScenario}
            onChange={(e) =>
              setNested(
                ["discover", "exampleScenario"],
                e.target.value
              )
            }
          />
          <Input
            placeholder="Format"
            value={skill.discover.format}
            onChange={(e) =>
              setNested(["discover", "format"], e.target.value)
            }
          />

          <h4 className="font-medium">Recognition Points</h4>
          {skill.discover.recognitionPoints.map((pt, i) => (
            <Input
              key={i}
              placeholder={`Point ${i + 1}`}
              value={pt}
              onChange={(e) =>
                setNested(
                  ["discover", "recognitionPoints", i],
                  e.target.value
                )
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() =>
              addItem(["discover", "recognitionPoints"], "")
            }
          >
            Add Point
          </Button>

          <h4 className="font-medium mt-2">Starter Concepts</h4>
          {skill.discover.starterConcepts.map((sc, i) => (
            <div key={i} className="flex gap-2">
              <Input
                placeholder="Term"
                value={sc.term}
                onChange={(e) =>
                  setNested(
                    ["discover", "starterConcepts", i, "term"],
                    e.target.value
                  )
                }
              />
              <Input
                placeholder="Definition"
                value={sc.definition}
                onChange={(e) =>
                  setNested(
                    ["discover", "starterConcepts", i, "definition"],
                    e.target.value
                  )
                }
              />
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              addItem(["discover", "starterConcepts"], {
                term: "",
                definition: "",
              })
            }
          >
            Add Concept
          </Button>

          <textarea
            placeholder="Module Outcome"
            className="w-full p-2 border rounded mt-2"
            rows={2}
            value={skill.discover.outcome}
            onChange={(e) =>
              setNested(["discover", "outcome"], e.target.value)
            }
          />
        </section>

        {/* 3️⃣ Learn */}
        <section className="space-y-2">
          <h2 className="font-semibold">3️⃣ Learn</h2>
          <h4 className="font-medium">Slides</h4>
          {skill.learn.slides.map((s, i) => (
            <textarea
              key={i}
              className="w-full p-2 border rounded mb-1"
              rows={2}
              placeholder={`Slide ${i + 1}`}
              value={s}
              onChange={(e) =>
                setNested(["learn", "slides", i], e.target.value)
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() => addItem(["learn", "slides"], "")}
          >
            Add Slide
          </Button>

          <h4 className="font-medium mt-2">Readings</h4>
          {skill.learn.readings.map((r, i) => (
            <div key={i} className="space-y-1">
              <Input
                placeholder="Title"
                value={r.title}
                onChange={(e) =>
                  setNested(["learn", "readings", i, "title"], e.target.value)
                }
              />
              <Input
                placeholder="Description"
                value={r.description}
                onChange={(e) =>
                  setNested(
                    ["learn", "readings", i, "description"],
                    e.target.value
                  )
                }
              />
              <Input
                placeholder="Link"
                value={r.link}
                onChange={(e) =>
                  setNested(["learn", "readings", i, "link"], e.target.value)
                }
              />
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              addItem(["learn", "readings"], {
                title: "",
                description: "",
                link: "",
              })
            }
          >
            Add Reading
          </Button>

          <h4 className="font-medium mt-2">Videos</h4>
          {skill.learn.videos.map((v, i) => (
            <div key={i} className="space-y-1">
              <Input
                placeholder="Title"
                value={v.title}
                onChange={(e) =>
                  setNested(["learn", "videos", i, "title"], e.target.value)
                }
              />
              <Input
                placeholder="Description"
                value={v.description}
                onChange={(e) =>
                  setNested(
                    ["learn", "videos", i, "description"],
                    e.target.value
                  )
                }
              />
              <Input
                placeholder="YouTube URL"
                value={v.youtube}
                onChange={(e) =>
                  setNested(["learn", "videos", i, "youtube"], e.target.value)
                }
              />
            </div>
          ))}
          <Button
            variant="outline"
            onClick={() =>
              addItem(["learn", "videos"], {
                title: "",
                description: "",
                youtube: "",
              })
            }
          >
            Add Video
          </Button>

          <h4 className="font-medium mt-2">Self‑Check</h4>
          {skill.learn.selfCheck.map((q, i) => (
            <Input
              key={i}
              placeholder={`Prompt ${i + 1}`}
              value={q}
              onChange={(e) =>
                setNested(["learn", "selfCheck", i], e.target.value)
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() => addItem(["learn", "selfCheck"], "")}
          >
            Add Prompt
          </Button>
        </section>

        {/* 4️⃣ Practice */}
        <section className="space-y-2">
          <h2 className="font-semibold">4️⃣ Practice</h2>
          <textarea
            placeholder="Scenario Prompt"
            className="w-full p-2 border rounded"
            rows={3}
            value={skill.practice.scenarioPrompt}
            onChange={(e) =>
              setNested(["practice", "scenarioPrompt"], e.target.value)
            }
          />
          <Input
            placeholder="Question Type"
            value={skill.practice.questionType}
            onChange={(e) =>
              setNested(["practice", "questionType"], e.target.value)
            }
          />
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={skill.practice.peerFeedback}
              onChange={(e) =>
                setNested(["practice", "peerFeedback"], e.target.checked)
              }
            />
            Allow Peer Feedback
          </label>
        </section>

        {/* 5️⃣ Apply */}
        <section className="space-y-2">
          <h2 className="font-semibold">5️⃣ Apply</h2>
          <textarea
            placeholder="Real‑World Challenge Prompt"
            className="w-full p-2 border rounded"
            rows={3}
            value={skill.apply.challengePrompt}
            onChange={(e) =>
              setNested(["apply", "challengePrompt"], e.target.value)
            }
          />
          <h4 className="font-medium">Example Steps</h4>
          {skill.apply.exampleSteps.map((st, i) => (
            <Input
              key={i}
              placeholder={`Step ${i + 1}`}
              value={st}
              onChange={(e) =>
                setNested(["apply", "exampleSteps", i], e.target.value)
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() => addItem(["apply", "exampleSteps"], "")}
          >
            Add Step
          </Button>
          <Input
            placeholder="Recommended Experience"
            value={skill.apply.recommendedExperience}
            onChange={(e) =>
              setNested(
                ["apply", "recommendedExperience"],
                e.target.value
              )
            }
          />
        </section>

        {/* 6️⃣ Reflect */}
        <section className="space-y-2">
          <h2 className="font-semibold">6️⃣ Reflect</h2>
          <h4 className="font-medium">Prompts</h4>
          {skill.reflect.prompts.map((p, i) => (
            <Input
              key={i}
              placeholder={`Prompt ${i + 1}`}
              value={p}
              onChange={(e) =>
                setNested(["reflect", "prompts", i], e.target.value)
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() => addItem(["reflect", "prompts"], "")}
          >
            Add Prompt
          </Button>

          <h4 className="font-medium mt-2">Connect Options</h4>
          {skill.reflect.connectOptions.map((o, i) => (
            <Input
              key={i}
              placeholder={`Option ${i + 1}`}
              value={o}
              onChange={(e) =>
                setNested(["reflect", "connectOptions", i], e.target.value)
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() => addItem(["reflect", "connectOptions"], "")}
          >
            Add Option
          </Button>
        </section>

        {/* 7️⃣ Bridge */}
        <section className="space-y-2">
          <h2 className="font-semibold">7️⃣ Bridge</h2>
          <textarea
            placeholder="Bridge Description"
            className="w-full p-2 border rounded"
            rows={2}
            value={skill.bridge.description}
            onChange={(e) =>
              setNested(["bridge", "description"], e.target.value)
            }
          />
          <h4 className="font-medium mt-2">Suggested Skills</h4>
          {skill.bridge.suggestedSkills.map((s, i) => (
            <Input
              key={i}
              placeholder="skill-slug"
              value={s}
              onChange={(e) =>
                setNested(["bridge", "suggestedSkills", i], e.target.value)
              }
            />
          ))}
          <Button
            variant="outline"
            onClick={() => addItem(["bridge", "suggestedSkills"], "")}
          >
            Add Skill
          </Button>
        </section>

        {/* Save */}
        <div className="text-center">
          <Button onClick={handleSave}>💾 Save Skill</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddSkill;

