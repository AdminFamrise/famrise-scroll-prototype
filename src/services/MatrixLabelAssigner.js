// src/services/MatrixLabelAssignment.js

// Assigns a matrix label based on normalized scores
export function assignMatrixLabel(normalizedPWB, normalizedSWB) {
  let label = "Unknown";

  if (normalizedPWB <= 0.3 && normalizedSWB <= 0.3) label = "Crisis Mode";
  else if (normalizedPWB <= 0.3 && normalizedSWB <= 0.7) label = "Struggling";
  else if (normalizedPWB <= 0.3 && normalizedSWB > 0.7)
    label = "Isolated Confidence";
  else if (normalizedPWB <= 0.7 && normalizedSWB <= 0.3) label = "Unstable";
  else if (normalizedPWB <= 0.7 && normalizedSWB <= 0.7)
    label = "Potential for Growth";
  else if (normalizedPWB <= 0.7 && normalizedSWB > 0.7) label = "Resilient";
  else if (normalizedPWB > 0.7 && normalizedSWB <= 0.3)
    label = "Underutilized Potential";
  else if (normalizedPWB > 0.7 && normalizedSWB <= 0.7)
    label = "Optimization Needed";
  else if (normalizedPWB > 0.7 && normalizedSWB > 0.7) label = "Thriving";

  return {
    matrixLabel: label,
    normalizedSWB: parseFloat(normalizedSWB.toFixed(2)),
    normalizedPWB: parseFloat(normalizedPWB.toFixed(2)),
  };
}

// Match matrix label to interaction strategies
export function getRecommendedInteractions(matrixLabel) {
  const interactionMap = {
    "Crisis Mode": ["Guided Only"],
    Struggling: ["Individual", "Guided"],
    "Isolated Confidence": ["Real-World Application", "Solo Practice"],

    Unstable: ["Group Learning", "Individual"],
    "Potential for Growth": ["Group Learning", "Guided", "Group Free"],
    Resilient: ["Group Free", "Real-World Application", "Solo Practice"],

    "Underutilized Potential": ["Mentorship", "Project-Based", "Solo Practice"],
    "Optimization Needed": [
      "Solo Practice",
      "Real-World Application",
      "Guided",
    ],
    Thriving: ["Solo Practice", "Mentorship", "Group Free"],
  };

  return interactionMap[matrixLabel] || ["Individual"];
}
