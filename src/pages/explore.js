// src/pages/Explore.js
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

const allSkills = [
  {
    title: "AI & Emerging Tech Awareness",
    category: "Growth",
    description: "Understand how tech is reshaping industries and daily life."
  },
  {
    title: "Live Sustainably, Think Circular",
    category: "Growth",
    description: "Build awareness and skills for sustainable living and work."
  },
  {
    title: "Create, Lead, or Grow a Flexible Career",
    category: "Growth",
    description: "Design a career path that adapts to your life and values."
  },
  {
    title: "Speak & Think with Clarity",
    category: "Everyday",
    description: "Develop clear communication and thought organization."
  },
  {
    title: "Handle Change with More Ease",
    category: "Everyday",
    description: "Learn emotional strategies to adapt to changes."
  },
];

const Explore = () => {
  const [search, setSearch] = useState("");
  const filteredSkills = allSkills.filter((skill) =>
    skill.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🔍 Explore New Skills</h1>

      <Input
        placeholder="Search by skill title..."
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <Card key={idx}>
            <CardContent>
              <h2 className="font-semibold text-lg mb-1">{skill.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{skill.description}</p>
              <span className="text-xs text-gray-500">Category: {skill.category}</span>
              <div className="mt-3">
                <Button size="sm">View Skill</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Explore;
