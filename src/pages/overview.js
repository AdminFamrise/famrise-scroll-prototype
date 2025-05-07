// src/pages/Overview.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { getUserData } from "../services/UserDataService";

const Overview = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [path, setPath] = useState(null);

  /* load once on mount */
  useEffect(() => {
    setUserData(getUserData());

    const raw = localStorage.getItem("onboardingOverview");
    if (raw) setPath(JSON.parse(raw));
  }, []);

  if (!path)
    return (
      <p className="text-center mt-20 text-gray-500">
        Loading your personalized plan…
      </p>
    );

  /* destructure with fallbacks */
  const {
    greeting = "👋 Welcome!",
    overview = "",
    steps = [],
    mentor = { name: "T‑B D", reason: "" },
  } = path;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-2 text-center">{greeting}</h1>
      <p className="mb-6 text-center text-gray-600 max-w-2xl">{overview}</p>

      <div className="grid gap-6 w-full max-w-3xl">
        {/* 1️⃣ Challenge & Goal */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-2">⚡ Your Challenge & Goal</h2>
            <p className="text-sm mb-1">
              <strong>Challenge:</strong>{" "}
              {userData?.challenge || "— not provided —"}
            </p>
            <p className="text-sm">
              <strong>Goal:</strong> {userData?.goal || "— not provided —"}
            </p>
          </CardContent>
        </Card>

        {/* 2️⃣ Learning Path */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-4">🚀 Your Personalized Path</h2>

            {steps.length ? (
              <ol className="space-y-4">
                {steps.map((s) => (
                  <li key={s.step} className="flex gap-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center">
                      {s.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{s.title}</p>
                      <p className="text-gray-700 text-sm">{s.description}</p>
                      {s.modules?.length && (
                        <p className="text-xs text-gray-500 mt-1">
                          Modules: {s.modules.join(", ")}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-gray-500">
                No path generated — try refining your inputs.
              </p>
            )}
          </CardContent>
        </Card>

        {/* 3️⃣ Mentor */}
        <Card>
          <CardContent>
            <h2 className="font-semibold mb-4">🤝 Recommended Mentor</h2>
            <div className="grid sm:grid-cols-3 gap-4 items-start">
              <div className="sm:col-span-2">
                <p className="font-medium">{mentor.name}</p>
                <p className="text-gray-700 text-sm">{mentor.reason}</p>
              </div>
              {/* placeholder avatar */}
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500">
                {mentor.name?.[0] || "?"}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button onClick={() => navigate("/dashboard")} className="mt-10">
        Yes, let’s go!
      </Button>
    </div>
  );
};

export default Overview;

