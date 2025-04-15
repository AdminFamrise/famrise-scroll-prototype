import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Reflect = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">
          🪞 Reflect: Communication & Reasoning
        </h1>
        <p className="text-gray-700 mb-6">
          In this final step, you’ll share insights with a coach or peer group,
          receive feedback, and earn recognition for your progress.
        </p>

        {/* Peer or Coach Session */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🤝 Coach or Peer Session</h2>
          <p className="text-sm text-gray-700 mb-2">
            Connect with a mentor, coach, or supportive peers to discuss your
            real-world applications. Share what you learned and get feedback on
            how to deepen your communication and reasoning skills.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Schedule a short online or in-person session</li>
            <li>Show any notes or outcomes from your Apply step</li>
            <li>Ask questions about challenges you faced</li>
          </ul>
        </section>

        {/* Digital Badges */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            🎉 Earn Your Digital Badge
          </h2>
          <p className="text-sm text-gray-700">
            Once you’ve demonstrated basic mastery in real-world tasks and
            shared your reflection, you’ll receive a digital badge. Display it
            on your profile to celebrate your achievement and inspire others!
          </p>
        </section>

        {/* Next Steps or Bridge Module */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("../bridge")}>
            Explore Next Skill or Growth Path
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reflect;

