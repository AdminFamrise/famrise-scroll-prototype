// src/components/forms/profile.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { mergeUserData } from "../services/UserDataService";

const Profile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    zipCode: "",
    city: "Maastricht",
    dutchComfort: "",
    languageAddOn: [],
    realLifeScenario: "",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleLanguageAddOn = (e) => {
    const { value, checked } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      languageAddOn: checked
        ? [...prevState.languageAddOn, value]
        : prevState.languageAddOn.filter((lang) => lang !== value),
    }));
  };

  const handleSubmit = () => {
    // 1️⃣ Save user data
    mergeUserData(profileData);

    // 2️⃣ Redirect based on realLifeScenario value
    if (profileData.realLifeScenario === "Everyday Life Skills") {
      navigate("/scenario/everyday");
    } else if (profileData.realLifeScenario === "New Paths & Opportunities") {
      navigate("/scenario/opportunities");
    } else {
      // Fallback
      navigate("/scenario");
    }
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        <h2 className="text-2xl font-bold mb-6">👤 Create Your Profile</h2>

        <Input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="mb-3"
        />
        <Input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-3"
        />
        <Input
          name="zipCode"
          placeholder="Zip Code"
          onChange={handleChange}
          className="mb-3"
        />

        <label className="block text-sm font-medium mb-1">City</label>
        <Input
          name="city"
          value={profileData.city}
          onChange={handleChange}
          className="mb-4"
        />

        <h3 className="font-semibold mb-2">🌐 Pick a Language Add-On</h3>
        <div className="flex gap-4 mb-4">
          {["Dutch", "English"].map((lang) => (
            <label key={lang} className="text-sm">
              <input
                type="checkbox"
                value={lang}
                checked={profileData.languageAddOn.includes(lang)}
                onChange={handleLanguageAddOn}
                className="mr-1"
              />
              {lang}
            </label>
          ))}
        </div>

        <h3 className="font-semibold mb-2">
          💬 How comfortable are you with the language you picked?
        </h3>
        <select
          name="dutchComfort"
          onChange={handleChange}
          className="mb-4 w-full p-2 border rounded"
        >
          <option value="">Select Comfort Level</option>
          <option value="Basic Survival Dutch">Basic Survival (Beginner)</option>
          <option value="Basic Social & Everyday Conversations">
            Social & Everyday Conversations (Moderate)
          </option>
          <option value="Understands and holds basic conversations">
            Hold Basic Conversations (Intermediate)
          </option>
          <option value="Comfortable with speaking and understanding">
            Comfortable with Speaking and Listening (Advanced)
          </option>
          <option value="Fluent">Feels like a native (Fluent)</option>
        </select>

        <h3 className="font-semibold mb-2">
          🎯 What kind of real-life situation are you facing next?
        </h3>
        <select
          name="realLifeScenario"
          onChange={handleChange}
          className="mb-6 w-full p-2 border rounded"
        >
          <option value="">Select a Category</option>
          <option value="Everyday Life Skills">
            🟩 Everyday Life Skills – Skills for clarity, confidence, balance
          </option>
          <option value="New Paths & Opportunities">
            🟦 New Paths & Opportunities – Expand options in work & society
          </option>
        </select>

        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default Profile;

