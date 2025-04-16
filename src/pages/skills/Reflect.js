// src/pages/skills/Reflect.js

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import mockCoaches from "../../../services/MockCoachDirectory"; // Ensure this file exists

const Reflect = () => {
  const navigate = useNavigate();
  const [coachList, setCoachList] = useState([]);

  useEffect(() => {
    // You can add scenario filtering logic here later
    setCoachList(mockCoaches);
  }, []);

  return (
    <Card className="p-6 max-w-5xl mx-auto">
      <CardContent>
        <h1 className="text-2xl font-bold mb-4">
          🪞 Reflect: Guided Feedback & Recognition
        </h1>
        <p className="text-gray-700 mb-6">
          In this step, you'll consolidate your learning through guidance, share
          real-world applications, and receive recognition for your progress.
        </p>

        {/* Coach Directory */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            🤝 Coaches & Support Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {coachList.map((coach, idx) => (
              <div
                key={idx}
                className="border p-4 rounded shadow-sm bg-gray-50"
              >
                <h3 className="font-semibold text-lg mb-1">{coach.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Guiding Topic:</strong> {coach.theorySession}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Real-World Scenario:</strong> {coach.scenario}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Format:</strong> {coach.format}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Included in Subscription:</strong>{" "}
                  {coach.included ? "Yes" : "No"}
                </p>
                {!coach.included && (
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Price per Session:</strong> €{coach.price}
                  </p>
                )}
                <Button className="mt-2 w-full text-center">
                  Book a Session
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Badge */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            🎉 Digital Badge & Summary
          </h2>
          <p className="text-sm text-gray-700">
            Once your reflection is reviewed, you’ll receive a digital badge and
            a summary of your achievements.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("../bridge")}>
            Explore What’s Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reflect;
