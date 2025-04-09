// src/services/CsvService.js
import Papa from "papaparse";

// 🧼 Normalizer helper (trims or assigns default)
function normalize(value) {
  return value?.trim() || "Unknown";
}

export async function loadCsvSolutions() {
  const response = await fetch("/001_dutch_Learning_DefaultSolutions.csv");
  const csvText = await response.text();
  const parsedResult = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const solutions = parsedResult.data.map((row, index) => ({
    solution_id: index,
    provider_id: parseInt(row.provider_id, 10),
    name: normalize(row.name),
    category: normalize(row.category),
    sub_category: normalize(row.sub_category),
    "Real Life Task": normalize(row["Real Life Task"]),
    "Difficult Level": normalize(row.complexity), // 🔄 renamed to match scoring logic
    "Interaction Type": normalize(row.interactionType), // 🔄 renamed to match scoring logic
    price: normalize(row.price),
    matrixFit: normalize(row.matrixFit),
  }));

  localStorage.setItem("mockSolutions", JSON.stringify(solutions));
}

export async function getMockSolutions() {
  const storedSolutions = localStorage.getItem("mockSolutions");
  return storedSolutions ? JSON.parse(storedSolutions) : [];
}
