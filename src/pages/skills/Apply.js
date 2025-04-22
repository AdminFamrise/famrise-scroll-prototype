import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate, useParams } from "react-router-dom"; // ✅ added useParams

const Apply = () => {
  const navigate = useNavigate();
  const { skillSlug } = useParams(); // ✅ get current skill slug
  const [projectChoice, setProjectChoice] = useState("");

  const miniProjects = [
    {
      title: "📝 Micro-Project: Observe & Adjust",
      description: "Choose a recurring situation (e.g., team meeting or morning routine). Apply one technique from this skill and record the outcome."
    },
    {
      title: "🎯 Peer Prompt Exchange",
      description: "Exchange scenarios with a peer and give each other feedback or encouragement. Reflect on the alternative approaches."
    }
  ];

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🏗️ Apply Your Skill</h1>

        <p className="text-gray-700 mb-6">
          Now that you’ve explored the theory and practiced key actions, it’s time to use your skill in a real-world mini project.
        </p>

        {/* Mini Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">🧪 Mini Projects</h2>
          <div className="space-y-4">
            {miniProjects.map((proj, idx) => (
              <label
                key={idx}
                className={`block border rounded p-4 cursor-pointer transition ${
                  projectChoice === proj.title ? "bg-green-100 border-green-500" : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="project"
                  className="mr-2"
                  value={proj.title}
                  checked={projectChoice === proj.title}
                  onChange={() => setProjectChoice(proj.title)}
                />
                <strong>{proj.title}</strong>
                <p className="text-sm text-gray-600 mt-1">{proj.description}</p>
              </label>
            ))}
          </div>
        </section>

        {/* Optional Peer Connection */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">🤝 Want Peer Support?</h2>
          <p className="text-sm text-gray-700 mb-2">
            You can share your chosen project in a peer group and invite feedback or ideas.
          </p>
          <Button variant="outline">🔗 Open Peer Room</Button>
        </section>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button
            onClick={() => navigate(`/skills/${skillSlug}/reflect`)}
            disabled={!projectChoice}
          >
            Next: Reflect & Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Apply;
