import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { getUserData } from "../services/UserDataService";

const Overview = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = getUserData();
    if (data) setUserData(data);
  }, []);

  if (!userData) return null;

  const {
    softSkills = [],
    hardSkills = [],
    profession = "",
    desiredLanguages = [],
    challenge = "",
    goal = ""
  } = userData;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">🎯 Does this look right?</h1>
      <p className="mb-8 text-center text-gray-700 max-w-lg">
        We've crafted a simple, structured & supported path based on your skills, challenge, and goals.
      </p>

      <div className="grid gap-6 w-full max-w-2xl">
        {/* Starting Point Card */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">🔍 Your Starting Point</h2>
            <p className="text-sm mb-1">
              <strong>Soft skills:</strong> {softSkills.join(", ") || "—"}
            </p>
            <p className="text-sm mb-1">
              <strong>Hard skills:</strong> {profession || hardSkills.join(", ") || "—"}
            </p>
            <p className="text-sm">
              <strong>Languages:</strong> {desiredLanguages.join(", ") || "—"}
            </p>
          </CardContent>
        </Card>

        {/* Challenge & Goal Card */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">⚡ Your Challenge & Goal</h2>
            <p className="text-sm mb-1">
              <strong>Challenge:</strong> {challenge || "—"}
            </p>
            <p className="text-sm">
              <strong>Goal:</strong> {goal || "—"}
            </p>
          </CardContent>
        </Card>

        {/* Path Forward Card */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">🚀 Your Path Forward</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Bite‑sized lessons built on what you know</li>
              <li>Hands‑on tools to practice in real life</li>
              <li>Expert mentoring to guide your growth</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Button onClick={() => navigate("/dashboard")} className="mt-8">
        Yes, let’s go!
      </Button>
    </div>
  );
};

export default Overview;

