import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { assignMatrixLabel } from "../../services/MatrixLabelAssigner";
import { mergeUserData } from "../../services/UserDataService"; // ✅ Use updated logic

const mhcQuestions = [
  { id: 1, text: "During the past month, how often did you feel happy?" },
  {
    id: 2,
    text: "During the past month, how often did you feel interested in life?",
  },
  {
    id: 3,
    text: "During the past month, how often did you feel satisfied with life?",
  },
  {
    id: 4,
    text: "During the past month, how often did you feel that you had something important to contribute to society?",
  },
  {
    id: 5,
    text: "During the past month, how often did you feel that you belonged to a community?",
  },
  {
    id: 6,
    text: "During the past month, how often did you feel that our society is becoming a better place for people like you?",
  },
  {
    id: 7,
    text: "During the past month, how often did you feel that people are basically good?",
  },
  {
    id: 8,
    text: "During the past month, how often did you feel that the way our society works makes sense to you?",
  },
  {
    id: 9,
    text: "During the past month, how often did you feel that you liked most parts of your personality?",
  },
  {
    id: 10,
    text: "During the past month, how often did you feel good at managing the responsibilities of your daily life?",
  },
  {
    id: 11,
    text: "During the past month, how often did you feel that you had warm and trusting relationships with others?",
  },
  {
    id: 12,
    text: "During the past month, how often did you feel that you had experiences that challenged you to grow and become a better person?",
  },
  {
    id: 13,
    text: "During the past month, how often did you feel confident to think and express your own ideas and opinions?",
  },
  {
    id: 14,
    text: "During the past month, how often did you feel that your life has a sense of direction or meaning to it?",
  },
];

const MHCForm = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: parseInt(value) });
  };

  const handleSubmit = () => {
    const getScore = (ids) =>
      ids.reduce((acc, id) => acc + (answers[id] || 0), 0);

    const hedonic = getScore([1, 2, 3]);
    const social = getScore([4, 5, 6, 7, 8]);
    const psychological = getScore([9, 10, 11, 12, 13, 14]);
    const total = hedonic + social + psychological;

    const highHedonic =
      [1, 2, 3].filter((id) => (answers[id] || 0) >= 4).length >= 1;
    const highFunctioning =
      [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].filter(
        (id) => (answers[id] || 0) >= 4
      ).length >= 6;
    const lowHedonic =
      [1, 2, 3].filter((id) => (answers[id] || 0) <= 1).length >= 1;
    const lowFunctioning =
      [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].filter(
        (id) => (answers[id] || 0) <= 1
      ).length >= 6;

    let mentalHealthCategory = "Moderate";
    if (highHedonic && highFunctioning) mentalHealthCategory = "Flourishing";
    else if (lowHedonic && lowFunctioning) mentalHealthCategory = "Languishing";

    const normalizedSWB = social / 25;
    const normalizedPWB = psychological / 30;

    const matrixResult = assignMatrixLabel(normalizedSWB, normalizedPWB);

    const mhcResults = {
      mhc: answers,
      mhcTotal: total,
      mhcEWB: hedonic,
      mhcSWB: social,
      mhcPWB: psychological,
      mhcCategory: mentalHealthCategory,
      matrixLabel: matrixResult.matrixLabel,
      normalizedSWB: matrixResult.normalizedSWB,
      normalizedPWB: matrixResult.normalizedPWB,
    };

    mergeUserData(mhcResults);
    if (onComplete) onComplete();
  };

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Mental Health Check (MHC-SF)</h2>
        {mhcQuestions.map((q) => (
          <div key={q.id} className="mb-3">
            <label className="block font-medium mb-1">{q.text}</label>
            <select
              name={String(q.id)}
              onChange={handleChange}
              className="w-full p-2 border rounded shadow-sm"
            >
              <option value="">Select frequency</option>
              <option value="0">Never</option>
              <option value="1">Once or Twice</option>
              <option value="2">About Once a Week</option>
              <option value="3">2 or 3 Times a Week</option>
              <option value="4">Almost Every Day</option>
              <option value="5">Every Day</option>
            </select>
          </div>
        ))}
        <Button onClick={handleSubmit} className="mt-4">
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};

export default MHCForm;
