import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { mergeUserData } from "../services/UserDataService";

const Profile = () => {
  const navigate = useNavigate();

  /* ───────────────────────────────────────────────
     Collect the four profile fields exactly as before
  ──────────────────────────────────────────────── */
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    zipCode: "",
    city: ""
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  /* ───────────────────────────────────────────────
     KEY CHANGE ↓
     Wrap everything inside { context: … } before we
     merge it into the global onboarding object.
  ──────────────────────────────────────────────── */
  const handleSubmit = () => {
    mergeUserData({ context: profileData });
    navigate("/scenario");          // move next right after saving
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        <h1 className="text-3xl font-bold mb-2">Your Personal Growth Engine.</h1>
        <p className="mb-6 text-gray-700">
          We combine goal‑driven learning with applied skill mentoring so you level up stronger, faster and with lasting impact.
        </p>

        <Input
          name="name"
          placeholder="Name"
          value={profileData.name}
          onChange={handleChange}
          className="mb-3"
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          value={profileData.email}
          onChange={handleChange}
          className="mb-3"
        />
        <Input
          name="zipCode"
          placeholder="Zip Code"
          value={profileData.zipCode}
          onChange={handleChange}
          className="mb-3"
        />

        <label className="block text-sm font-medium mb-1">City</label>
        <Input
          name="city"
          placeholder="City"
          value={profileData.city}
          onChange={handleChange}
          className="mb-6"
        />

        {/* Button now calls handleSubmit, which saves and navigates */}
        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default Profile;



