import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { mergeUserData } from "../services/UserDataService";

const softSkillsList = [
  'Creativity',
  'Teamwork',
  'Communication',
  'Adaptability',
  'Critical Thinking',
  'Problem-solving',
  'Leadership',
  'Emotional Intelligence'
];

const hardSkillsOptions = [
  'Java',
  'Excel',
  'UX Design',
  'Project Management',
  'Data Analysis',
  'JavaScript',
  'Python'
];

const Profile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    zipCode: "",
    city: "Maastricht"
  });
  const [softSkills, setSoftSkills] = useState([]);
  const [hardSkills, setHardSkills] = useState([]);
  const [cvFile, setCvFile] = useState(null);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSoftSkillToggle = (skill) => {
    setSoftSkills((prev) => {
      if (prev.includes(skill)) {
        return prev.filter((s) => s !== skill);
      } else {
        if (prev.length >= 5) return prev;
        return [...prev, skill];
      }
    });
  };

  const handleHardSkillChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setHardSkills(selected.slice(0, 5));
  };

  const handleCVUpload = (e) => {
    setCvFile(e.target.files[0] || null);
  };

  const handleSubmit = () => {
    mergeUserData({
      ...profileData,
      softSkills,
      hardSkills,
      cvFile
    });
    navigate("/onboarding/step2");
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        {/* Hero Headline */}
        <h1 className="text-3xl font-bold mb-2">Your Personal Growth Engine.</h1>
        <p className="mb-6 text-gray-700">
          We combine goal-driven micro-learning with expert mentoring so you level up stronger,
          faster, and with lasting impact.
        </p>
        <p className="text-sm text-gray-500 mb-4">Step 1 of 3</p>

        {/* Skill Snapshot */}
        <h2 className="text-2xl font-semibold mb-4">Skill Snapshot</h2>

        <h3 className="font-medium mb-2">What strengths do you bring?</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {softSkillsList.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => handleSoftSkillToggle(skill)}
              className={`px-3 py-1 border rounded-full cursor-pointer transition 
                ${softSkills.includes(skill)
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-100 text-gray-800 border-gray-300'}
              `}
            >
              {skill}
            </button>
          ))}
        </div>

        <h3 className="font-medium mb-2">Hard Skills</h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Select from list</label>
            <select
              multiple
              value={hardSkills}
              onChange={handleHardSkillChange}
              className="w-full p-2 border rounded h-24"
            >
              {hardSkillsOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Upload your CV</label>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleCVUpload}
              className="w-full"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Pick up to 5 of each — or upload your resume to import everything at once.
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
          value={profileData.city}
          onChange={handleChange}
          className="mb-6"
        />

        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
