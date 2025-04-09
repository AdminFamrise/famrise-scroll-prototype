import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const CsvParser = () => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Update the path to match the file name/location in your CodeSandbox
    fetch("/002_dutchSolution_default.csv")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((csvText) => {
        const parsedResult = Papa.parse(csvText, {
          header: true, // Set to 'true' if your CSV has a header row
          skipEmptyLines: true, // Ignores empty lines
        });
        // The actual parsed data is in parsedResult.data
        setCsvData(parsedResult.data);
      })
      .catch((error) => {
        console.error("Error fetching or parsing CSV:", error);
      });
  }, []);

  return (
    <div>
      <h1>CSV Data</h1>
      <pre>{JSON.stringify(csvData, null, 2)}</pre>
    </div>
  );
};

export default CsvParser;
