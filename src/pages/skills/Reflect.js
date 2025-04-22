import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Reflect = () => {
  const navigate = useNavigate();

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">🔍 Reflect & Connect</h1>

        {/* Prompt to Reflect */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🧠 What Did You Learn?</h2>
          <p className="text-sm text-gray-700 mb-2">
            Think back to your mini-project and previous modules. What stood out? How did this skill help you respond differently?
          </p>
          <textarea
            placeholder="Write your insights or personal notes here..."
            className="w-full p-3 border rounded shadow-sm text-sm"
            rows={5}
          ></textarea>
        </section>

        {/* Connect with Support */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">👥 Connect with Others</h2>
          <p className="text-sm text-gray-700 mb-3">
            Choose a support option to deepen your understanding or celebrate your progress.
          </p>
          <div className="space-y-3">
            <Button variant="outline" onClick={() => navigate("/coach-directory")}>
              💬 Book 1-on-1 Mentorship
            </Button>
            <Button variant="outline">👥 Join Peer Group Meetup</Button>
            <Button variant="outline">🎓 Guided Coaching Session</Button>
          </div>
        </section>

        {/* Wrap-Up Message */}
        <section className="mt-10 text-center">
          <h3 className="text-lg font-semibold mb-2">🌟 You’ve Completed This Skill Journey!</h3>
          <p className="text-sm text-gray-600 mb-4">
            Whether this is your first or one of many, taking time to reflect is key to real growth. You’re ready to explore the next step.
          </p>
          <Button onClick={() => navigate("../bridge")}>Continue to Bridge Module</Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default Reflect;


