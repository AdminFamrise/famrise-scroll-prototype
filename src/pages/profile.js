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
    city: ""
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    mergeUserData(profileData);
    navigate("/onboarding/step2");
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        {/* Hero Headline */}
        <h1 className="text-3xl font-bold mb-2">Your Personal Growth Engine.</h1>
        <p className="mb-6 text-gray-700">
          We combine goal-driven learning with applied skill mentoring so you level up stronger, faster and with lasting impact. Simple. Structured. Supported.
        </p>

        {/* Basic Profile Fields */}
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

             <Link to="/scenario">
        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default Profile;

