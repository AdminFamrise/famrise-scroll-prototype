import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { mergeUserData } from "../../services/UserDataService";

const ScenarioFollowUp = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    school: "",
    specificGoal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    mergeUserData(formData); // Store in user context
    if (onComplete) onComplete();
  };

  return (
    <Card className="p-6">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">
          🎯 Let’s Personalize Your Journey
        </h2>

        <div className="mb-6">
          <label className="font-semibold block mb-1">
            🏫 Which school does your child attend?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            This helps us show solutions supported by your child’s school (if
            available).
          </p>
          <select
            name="school"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a school</option>
            <option value="De Bundeling">De Bundeling</option>
            <option value="OBS Oefentuin">OBS Oefentuin</option>
            <option value="Montessori Maastricht">Montessori Maastricht</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-1">
            👨‍👩‍👧 How do you want to help your child right now?
          </label>
          <select
            name="specificGoal"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a goal</option>
            <option value="Help with math homework">
              Help with math homework
            </option>
            <option value="Talk about school without frustration">
              Talk about school without frustration
            </option>
            <option value="Teach kids how to think">
              Teach kids how to think (not just memorize)
            </option>
            <option value="Learn together, one question at a time">
              Learn together, one question at a time
            </option>
          </select>
        </div>

        <Button onClick={handleSubmit}>Continue</Button>
      </CardContent>
    </Card>
  );
};

export default ScenarioFollowUp;
