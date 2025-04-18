// src/pages/admin/AddSkill.js

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const AddSkill = () => {
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    category: "Growth Skills",
    overview: "",
    readings: [{ title: "", description: "", link: "" }],
    videos: [{ title: "", url: "" }],
    practicePrompt: "",
    projectIdeas: [""],
    reflectionPrompt: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (type, index, key, value) => {
    const updated = [...formData[type]];
    updated[index][key] = value;
    setFormData({ ...formData, [type]: updated });
  };

  const addField = (type, template) => {
    setFormData({ ...formData, [type]: [...formData[type], template] });
  };

  const handleSave = () => {
    const fileName = `${formData.slug}.json`;
    const jsonBlob = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json"
    });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(jsonBlob);
    a.download = fileName;
    a.click();
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-6">🛠️ Add New Skill</h1>

        <Input name="slug" placeholder="slug (e.g. ai-literacy)" onChange={handleChange} className="mb-3" />
        <Input name="title" placeholder="Skill Title" onChange={handleChange} className="mb-3" />
        <textarea
          name="overview"
          placeholder="Overview"
          rows={4}
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
        />

        {/* Readings */}
        <h2 className="text-lg font-semibold mt-6 mb-2">📚 Readings</h2>
        {formData.readings.map((item, idx) => (
          <div key={idx} className="mb-3">
            <Input
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleArrayChange("readings", idx, "title", e.target.value)}
              className="mb-1"
            />
            <Input
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleArrayChange("readings", idx, "description", e.target.value)}
              className="mb-1"
            />
            <Input
              placeholder="Link"
              value={item.link}
              onChange={(e) => handleArrayChange("readings", idx, "link", e.target.value)}
            />
          </div>
        ))}
        <Button variant="outline" onClick={() => addField("readings", { title: "", description: "", link: "" })}>Add Reading</Button>

        {/* Videos */}
        <h2 className="text-lg font-semibold mt-6 mb-2">🎬 Videos</h2>
        {formData.videos.map((item, idx) => (
          <div key={idx} className="mb-3">
            <Input
              placeholder="Title"
              value={item.title}
              onChange={(e) => handleArrayChange("videos", idx, "title", e.target.value)}
              className="mb-1"
            />
            <Input
              placeholder="YouTube URL"
              value={item.url}
              onChange={(e) => handleArrayChange("videos", idx, "url", e.target.value)}
            />
          </div>
        ))}
        <Button variant="outline" onClick={() => addField("videos", { title: "", url: "" })}>Add Video</Button>

        {/* Practice & Project */}
        <h2 className="text-lg font-semibold mt-6 mb-2">🧪 Practice Prompt</h2>
        <textarea
          name="practicePrompt"
          rows={3}
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
        />

        <h2 className="text-lg font-semibold mt-6 mb-2">📌 Project Ideas</h2>
        {formData.projectIdeas.map((item, idx) => (
          <Input
            key={idx}
            placeholder={`Project Idea #${idx + 1}`}
            value={item}
            onChange={(e) => {
              const updated = [...formData.projectIdeas];
              updated[idx] = e.target.value;
              setFormData({ ...formData, projectIdeas: updated });
            }}
            className="mb-2"
          />
        ))}
        <Button variant="outline" onClick={() => addField("projectIdeas", "")}>Add Project Idea</Button>

        {/* Reflection */}
        <h2 className="text-lg font-semibold mt-6 mb-2">🔍 Reflection Prompt</h2>
        <textarea
          name="reflectionPrompt"
          rows={3}
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
        />

        {/* Save Button */}
        <div className="text-center mt-6">
          <Button onClick={handleSave}>💾 Save Skill File</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddSkill;
