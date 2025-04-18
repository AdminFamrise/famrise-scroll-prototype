// src/pages/skills/BridgeModule.js

import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const BridgeModule = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🌉 Bridge to Growth Skills</h1>

        {/* Explanation */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📈 What Comes Next?</h2>
          <p className="text-sm text-gray-700">
            You’ve built a strong foundation. This Bridge module helps you see how your current skill opens up paths to more advanced, growth-oriented skills.
          </p>
        </section>

        {/* Example Pathways */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🚀 Possible Future Pathways</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              From <strong>Communication & Reasoning</strong> to <em>Leading Digital Teams</em>
            </li>
            <li>
              From <strong>Adaptability</strong> to <em>Managing Circular Economy Projects</em>
            </li>
            <li>
              From <strong>Initiative</strong> to <em>Launching a Social Venture</em>
            </li>
          </ul>
        </section>

        {/* Guidance */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🔍 What to Explore</h2>
          <p className="text-sm text-gray-700">
            In your dashboard, you’ll now see recommendations tied to these growth directions. Look out for badges, suggested peer projects, and mentor support to continue evolving.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button onClick={() => navigate("/dashboard")}>Go to My Dashboard</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BridgeModule;
