// src/components/forms/ProfileCreation.js

import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { mergeUserData } from "../../services/UserDataService"; // ✅ Updated import

const ProfileCreation = ({ onComplete }) => {
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
    mergeUserData(profileData);
    if (onComplete) onComplete();
  };

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">👤 Create Your Profile</h2>

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

        <h3 className="font-semibold mb-1">🌐 Pick a Language Add-On</h3>
        <div className="flex gap-4 mb-4">
          {["Dutch", "English"].map((lang) => (
            <label key={lang}>
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

        <h3 className="font-semibold mb-1">
          💬 How comfortable are you with Dutch?
        </h3>
        <select
          name="dutchComfort"
          onChange={handleChange}
          className="mb-4 w-full p-2 border rounded"
        >
          <option value="">Select Language Comfort Level</option>
          <option value="Basic Survival Dutch">
            Basic Survival Dutch (Beginner)
          </option>
          <option value="Basic Social & Everyday Conversations">
            Basic Social & Everyday Conversations (Moderate)
          </option>
          <option value="Understands and holds basic conversations">
            Understands well and can hold basic conversations (Intermediate)
          </option>
          <option value="Comfortable with speaking and understanding">
            Pretty comfortable with understanding and speaking (Advanced)
          </option>
          <option value="Fluent">Feels like a native (Fluent)</option>
        </select>

        <h3 className="font-semibold mb-1">
          🎯 Which real-life scenario are you dealing with next?
        </h3>
        <select
          name="realLifeScenario"
          onChange={handleChange}
          className="mb-6 w-full p-2 border rounded"
        >
          <option value="">Select a Real-Life Situation</option>
          <option value="Support my child’s success in school">
            Help my preschool or school child(ren) to better succeed
          </option>
          <option value="Digital readiness at home or work">
            Gearing Up for a Digital World (At Home and at Work)
          </option>
          <option value="Green practices and family learning">
            Raising a Greener Generation (By Practicing What We Teach)
          </option>
          <option value="Staying relevant with tech change">
            Staying Relevant in an Automated World and Guiding Your Kids to Do
            the Same
          </option>
          <option value="Improve how I show up in life and work">
            Strengthening the Skills That Shape How You Show Up — At Work, At
            Home, In Life
          </option>
          <option value="Turning ideas into action">
            Ideas into Action — and Action into Sustainable Value
          </option>
        </select>

        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCreation;
