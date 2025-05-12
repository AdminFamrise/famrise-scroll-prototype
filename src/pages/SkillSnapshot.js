// src/pages/SkillSnapshotPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { mergeUserData, getUserData } from "../services/UserDataService";

/* ───────────────────────── dropdown data ───────────────────────── */
const softSkillsList = [
  "Creativity",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Critical Thinking",
  "Problem-solving",
  "Leadership",
  "Emotional Intelligence",
];

const languagesList = ["English", "Dutch", "German"];

/* ───────────────────────── page component ───────────────────────── */
const SkillSnapshotPage = () => {
  const navigate = useNavigate();

  /* form state */
  const [softSkills, setSoftSkills] = useState([]);
  const [profession, setProfession] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [desiredLanguages, setDesiredLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  /* helpers */
  const toggleSoftSkill = (skill) =>
    setSoftSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : prev.length < 5
        ? [...prev, skill]
        : prev
    );

  const handleProfessionChange = (e) => setProfession(e.target.value);
  const handleCvUpload = (e) => setCvFile(e.target.files[0] ?? null);
  const handleLanguageChange = (e) =>
    setDesiredLanguages(Array.from(e.target.selectedOptions, (o) => o.value));

  /* ───────── submit ───────── */
  const handleSubmit = async () => {
    /** 1️⃣  Save this page’s answers under the two new buckets */
    mergeUserData({
      skills: {
        soft: softSkills,
        hard: profession ? [profession] : [],
        cvUploaded: !!cvFile,
      },
      preferences: { language: desiredLanguages },
    });

    const fullUserData = getUserData(); // has context, challenge, goal, skills, preferences
    setLoading(true);

    /** 2️⃣  Endpoint from env */
const endpoint = `${process.env.REACT_APP_N8N_ENDPOINT}/onboarding/overview`;


    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullUserData),
      });
      if (!res.ok) throw new Error("n8n returned " + res.status);

      const pathJson = await res.json();
      localStorage.setItem("onboardingOverview", JSON.stringify(pathJson));
      navigate("/overview");
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    softSkills.length === 0 &&
    !profession &&
    !cvFile &&
    desiredLanguages.length === 0;

  /* ───────── UI ───────── */
  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">Step 4 of 4</p>
        <h2 className="text-2xl font-bold mb-2">Skill Snapshot</h2>
        <p className="mb-6 text-gray-700">
          We gather information about your current soft, professional, and
          language skills so your learning path starts from what you already
          know.
        </p>

        {/* soft skills */}
        <h3 className="font-medium mb-2">What strengths do you bring?</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {softSkillsList.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSoftSkill(skill)}
              className={`px-3 py-1 border rounded-full cursor-pointer transition ${
                softSkills.includes(skill)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* hard skills */}
        <h3 className="font-medium mb-2">Hard Skills</h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Type your profession
            </label>
            <Input
              name="profession"
              placeholder="e.g., Software Engineer"
              value={profession}
              onChange={handleProfessionChange}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Or upload your CV
            </label>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleCvUpload}
              className="w-full"
            />
          </div>
        </div>

        {/* languages */}
        <h3 className="font-medium mb-2">Desired Language</h3>
        <select
          multiple
          value={desiredLanguages}
          onChange={handleLanguageChange}
          className="w-full p-2 border rounded mb-6 h-24"
        >
          {languagesList.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        {/* submit */}
        <Button onClick={handleSubmit} disabled={isDisabled || loading}>
          {loading ? "Submitting..." : "Continue"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkillSnapshotPage;



