import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { getUserData } from "../services/UserDataService";
import LanguageLayer from "../components/language/LanguageLayer";
import mockSpecialServices from "../services/MockSpecialServices";
import mockSolutions from "../services/MockSolutions";

const Overview = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [learningMatches, setLearningMatches] = useState([]);
  const [specialSupport, setSpecialSupport] = useState([]);

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData(data);

      // 🎯 Match standard learning baskets
      const matches = mockSolutions.filter(
        (sol) =>
          sol.Scenario === data.realLifeScenario &&
          sol.SpecificGoal === data.specificGoal
      );
      setLearningMatches(matches);

      // 🧠 If MHC-SF was filled, match extra services
      if (!data.mhcSkipped) {
        const extras = mockSpecialServices.filter(
          (svc) =>
            svc.realLifeScenario === data.realLifeScenario &&
            svc.specificGoal === data.specificGoal
        );
        setSpecialSupport(extras);
      }
    }
  }, []);

  const handleStartJourney = () => {
    navigate("/dashboard");
  };

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-center">🎯 Your Results Overview</h1>

      <section>
        <h2 className="text-lg font-semibold mb-3">🎒 Matched Learning Baskets</h2>
        {learningMatches.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {learningMatches.map((sol, idx) => (
              <Card key={idx}>
                <CardContent>
                  <h4 className="font-semibold mb-1">{sol.Title}</h4>
                  <p className="text-sm mb-2">{sol.Description}</p>
                  <p className="text-xs text-gray-600">
                    Format: {sol.InteractionType} | Language: {sol.LanguageAddOn}
                  </p>
                  <LanguageLayer
                    goal={userData?.specificGoal}
                    level={userData?.dutchComfort}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>No learning suggestions found yet. Please review your selections.</p>
        )}
      </section>

      {specialSupport.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-3">
            🧠 Extra Services Based on Well-Being Check
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {specialSupport.map((svc, idx) => (
              <Card key={idx}>
                <CardContent>
                  <h4 className="font-semibold mb-1">{svc.title}</h4>
                  <p className="text-sm mb-2">{svc.description}</p>
                  <p className="text-xs text-gray-600">
                    Format: {svc.format} | Interaction: {svc.interactionType} |{" "}
                    Language: {svc.languages.join(", ")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <div className="text-center mt-10">
        <Button onClick={handleStartJourney}>🚀 Start My Journey</Button>
      </div>
    </div>
  );
};

export default Overview;

