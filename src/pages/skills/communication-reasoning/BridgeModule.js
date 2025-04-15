import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

// Example growth skill “connections”
const growthPaths = [
  {
    title: "Leadership & Managerial Skills",
    description:
      "Clear communication is essential to motivate teams, facilitate meetings, and balance diverse perspectives. Reasoning helps you delegate effectively and set logical goals."
  },
  {
    title: "Green & Circular Projects",
    description:
      "Community eco-initiatives rely on persuasive communication to recruit volunteers and logical reasoning to plan sustainable actions with limited resources."
  },
  {
    title: "Digital Skills – Remote Work",
    description:
      "A remote team thrives on concise writing, video-call etiquette, and rational problem-solving. Good communication and step-by-step logic are the keys."
  },
  {
    title: "Specialist Skills – Tech Teams",
    description:
      "Tech roles need strong reasoning (for troubleshooting, design decisions) and clear communication when explaining complex ideas to non-tech stakeholders."
  },
  {
    title: "Family-Centered Social Innovation",
    description:
      "Proposing community-based solutions or micro-projects demands solid communication to rally support and reasoning to ensure feasibility."
  }
];

const BridgeModule = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">
          🌱 Bridge Module: Communication & Reasoning
        </h1>
        <p className="text-gray-700 mb-6">
          You've built foundational skills in Communication & Reasoning.
          Now see how they unlock bigger growth opportunities, from leadership
          roles to digital collaboration.
        </p>

        <section className="space-y-4 mb-8">
          {growthPaths.map((path, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow-sm">
              <h3 className="font-semibold text-md mb-1">{path.title}</h3>
              <p className="text-sm text-gray-700">{path.description}</p>
            </div>
          ))}
        </section>

        <p className="text-sm text-gray-600 mb-4">
          Each of these paths builds on the skills you’ve gained. Whether
          launching a green initiative, leading a project, or collaborating
          remotely, the communication & reasoning toolkit you’ve practiced here
          opens doors.
        </p>

        <div className="text-center">
          <Button onClick={() => navigate("/dashboard")}>
            Return to Your Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BridgeModule;

