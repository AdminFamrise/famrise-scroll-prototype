import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { getUserData } from "../services/UserDataService";

const Overview = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    const user = getUserData();
    const aiOverview = localStorage.getItem("onboardingOverview");

    setUserData(user);
    setOverview(aiOverview ? JSON.parse(aiOverview) : null);
  }, []);

  if (!overview) return <p className="text-center mt-20 text-gray-500">Loading your personalized plan...</p>;

  const {
    greeting,
    acknowledgement,
    challenge,
    goal,
    suggestedPath = [],
    summary
  } = overview;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-2 text-center">{greeting || "👋 Welcome!"}</h1>
      <p className="mb-4 text-center text-gray-600 max-w-xl">{acknowledgement}</p>

      <div className="grid gap-6 w-full max-w-2xl">
        {/* Challenge & Goal Card */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">⚡ Your Challenge & Goal</h2>
            <p className="text-sm mb-1">
              <strong>Challenge:</strong> {challenge || userData?.challenge || "—"}
            </p>
            <p className="text-sm">
              <strong>Goal:</strong> {goal || userData?.goal || "—"}
            </p>
          </CardContent>
        </Card>

        {/* Suggested Path */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">🚀 Your Personalized Learning Path</h2>
            {suggestedPath.length > 0 ? (
              <ol className="list-decimal list-inside text-sm space-y-2">
                {suggestedPath.map((step, index) => (
                  <li key={index}>
                    <div className="font-medium">{step.title}</div>
                    <p className="text-gray-700">{step.reason}</p>
                    {step.sourceUrl && (
                      <a
                        href={step.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline text-sm"
                      >
                        View Module
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            ) : (
              <p>No path generated — try refining your inputs.</p>
            )}
          </CardContent>
        </Card>

        {/* Summary */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">📦 Summary</h2>
            <p className="text-sm text-gray-800">{summary || "Follow this path to grow with guidance and confidence."}</p>
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


