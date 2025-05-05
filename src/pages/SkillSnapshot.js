import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { mergeUserData } from "../../services/UserDataService";

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

const languagesList = ['English', 'Dutch', 'German'];

const SkillSnapshotPage = () => {
  const navigate = useNavigate();
  const [softSkills, setSoftSkills] = useState([]);
  const [profession, setProfession] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [desiredLanguages, setDesiredLanguages] = useState([]);

  const toggleSoftSkill = (skill) => {
    setSoftSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : prev.length < 5
        ? [...prev, skill]
        : prev
    );
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleCvUpload = (e) => {
    setCvFile(e.target.files[0] || null);
  };

  const handleLanguageChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setDesiredLanguages(selected);
  };

  const handleSubmit = () => {
    mergeUserData({ softSkills, profession, cvFile, desiredLanguages });
    navigate("/onboarding/step2");
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">Step 1 of 3</p>

        <h2 className="text-2xl font-bold mb-2">Skill Snapshot</h2>
        <p className="mb-6 text-gray-700">
          We gather information about your current soft, academic/professional, and language skills to tailor your learning path from what you already know and help you grow from there.
        </p>

        <h3 className="font-medium mb-2">What strengths do you bring?</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {softSkillsList.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSoftSkill(skill)}
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
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Type your profession</label>
            <Input
              name="profession"
              placeholder="e.g., Software Engineer"
              value={profession}
              onChange={handleProfessionChange}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Or upload your CV</label>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleCvUpload}
              className="w-full"
            />
          </div>
        </div>

        <h3 className="font-medium mb-2">Desired Language</h3>
        <select
          multiple
          value={desiredLanguages}
          onChange={handleLanguageChange}
          className="w-full p-2 border rounded mb-6 h-24"
        >
          {languagesList.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <Button onClick={handleSubmit} disabled={softSkills.length === 0 && !profession && !cvFile && desiredLanguages.length === 0}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkillSnapshotPage;
