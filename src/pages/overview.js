// src/pages/overview.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { getUserData } from "../services/UserDataService";
import LanguageLayer from "../components/language/LanguageLayer";
import mockSpecialServices from "../services/MockSpecialServices";
import mockSolutions from "../services/MockSolutions";

const Overview = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [learningMatches, setLearningMatches] = useState([]);
  const [specialSupport, setSpecialSupport] = useState([]);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData(data);

      const matches = mockSolutions.filter(
        (sol) =>
          sol.Scenario === data.realLifeScenario &&
          sol.SpecificGoal === data.specificGoal
      );
      setLearningMatches(matches);

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

  const filteredMatches = learningMatches.filter((match) => {
    const matchesSearch = match.Title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFormat = selectedFormat ? match.InteractionType === selectedFormat : true;
    const matchesLanguage = selectedLanguage ? match.LanguageAddOn === selectedLanguage : true;
    return matchesSearch && matchesFormat && matchesLanguage;
  });

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-center">🎯 Your Personalized Results</h1>

      {/* Filter and Search Bar */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <h3 className="font-semibold mb-2">🎛 Filters</h3>
          <div className="mb-4">
            <label className="block font-medium mb-1 text-sm">Format</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
            >
              <option value="">All</option>
              <option value="Self-Paced">Self-Paced</option>
              <option value="Peer Group">Peer Group</option>
              <option value="Mentor Session">Mentor Session</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1 text-sm">Language</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All</option>
              <option value="Dutch">Dutch</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <Input
            placeholder="🔍 Search learning baskets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded"
          />

          {/* Learning Results */}
          <div>
            <h2 className="text-lg font-semibold mb-3">📘 Matched Learning Baskets</h2>
            {filteredMatches.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMatches.map((sol, idx) => (
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
              <p className="text-gray-600">No learning matches found for your filters.</p>
            )}
          </div>

          {/* Special Services */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              🧠 Extra Services Based on Well-Being Check
            </h2>
            {specialSupport.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            ) : (
              <p className="text-gray-600">No extra support services matched.</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <Button onClick={handleStartJourney}>🚀 Start My Journey</Button>
      </div>
    </div>
  );
};

export default Overview;

