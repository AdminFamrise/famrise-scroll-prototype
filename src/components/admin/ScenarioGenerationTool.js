// src/components/admin/ScenarioGenerationTool.js

import React, { useState } from 'react';
import { useAgentCommand } from '../../agents/hooks/useAgent';

function ScenarioGenerationTool() {
  const [skillId, setSkillId] = useState('');
  const [location, setLocation] = useState('');
  const [hasChildren, setHasChildren] = useState(false);
  const [childrenAgeRange, setChildrenAgeRange] = useState('');
  const [isExpat, setIsExpat] = useState(false);
  const [isEmployed, setIsEmployed] = useState(false);
  const [scenarios, setScenarios] = useState(null);
  
  const { execute, isLoading, error } = useAgentCommand('generateScenarios');
  
  const handleGenerateScenarios = async () => {
    try {
      // Construct cluster info from form fields
      const clusterInfo = {
        location,
        profileData: {
          hasChildren,
          childrenAgeRange: hasChildren ? childrenAgeRange : null
        },
        culturalContext: {
          isExpat
        },
        professionalBackground: {
          isEmployed
        },
        psychologicalNeeds: {
          personalGrowth: true
        },
        socialNeeds: {
          improveCommunication: true
        }
      };
      
      const result = await execute({
        skillId,
        clusterInfo
      });
      
      if (result.success) {
        setScenarios(result.scenarios);
      }
    } catch (err) {
      console.error('Error generating scenarios:', err);
    }
  };
  
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Scenario Generation Tool</h1>
      
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Skill ID
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={skillId}
            onChange={(e) => setSkillId(e.target.value)}
            placeholder="Enter skill ID"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Maastricht"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="hasChildren"
            checked={hasChildren}
            onChange={(e) => setHasChildren(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="hasChildren" className="text-sm font-medium">
            Has Children
          </label>
        </div>
        
        {hasChildren && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Children Age Range
            </label>
            <select
              className="w-full p-2 border rounded"
              value={childrenAgeRange}
              onChange={(e) => setChildrenAgeRange(e.target.value)}
            >
              <option value="">Select age range</option>
              <option value="0-5">0-5 years</option>
              <option value="6-12">6-12 years</option>
              <option value="13-18">13-18 years</option>
            </select>
          </div>
        )}
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isExpat"
            checked={isExpat}
            onChange={(e) => setIsExpat(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="isExpat" className="text-sm font-medium">
            Is Expat
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isEmployed"
            checked={isEmployed}
            onChange={(e) => setIsEmployed(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="isEmployed" className="text-sm font-medium">
            Is Employed
          </label>
        </div>
      </div>
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
        onClick={handleGenerateScenarios}
        disabled={isLoading || !skillId.trim()}
      >
        {isLoading ? 'Generating...' : 'Generate Scenarios'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error.message}
        </div>
      )}
      
      {scenarios && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Generated Scenarios</h2>
          
          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <div key={index} className="border rounded p-4">
                <div className="flex justify-between">
                  <span className="font-bold capitalize">{scenario.skillSection}</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Relevance: {scenario.relevance}%
                  </span>
                </div>
                <h3 className="font-bold text-lg mt-2">{scenario.realLifeScenario}</h3>
                <div className="mt-2">
                  <p className="font-medium">{scenario.scenarioLabel}</p>
                  <p className="text-sm mt-1">{scenario.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ScenarioGenerationTool;
