import React, { useState } from 'react';
import scenarioGenerationAgent from '../../agents/agents/scenarioGenerationAgent';

/**
 * Enhanced Scenario Generation Tool
 * 
 * This component provides an interface for generating learning scenarios
 * based on customer clusters and skill information. It uses the enhanced
 * Scenario Generation Agent to create structured scenarios following the
 * 5-step progressive process.
 */
const EnhancedScenarioGenerationTool = () => {
  // State for form inputs
  const [skillInfo, setSkillInfo] = useState({
    slug: '',
    title: '',
    category: 'basicCognitive',
    description: ''
  });
  
  // State for selected customer cluster
  const [customerClusterId, setCustomerClusterId] = useState('expatParentsNL');
  
  // State for generated scenarios
  const [generatedScenarios, setGeneratedScenarios] = useState(null);
  
  // State for loading status
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle form input changes
  const handleSkillInfoChange = (e) => {
    const { name, value } = e.target;
    setSkillInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle customer cluster selection
  const handleClusterChange = (e) => {
    setCustomerClusterId(e.target.value);
  };
  
  // Generate scenarios
  const handleGenerateScenarios = () => {
    setIsLoading(true);
    
    try {
      // Call the scenario generation agent
      const result = scenarioGenerationAgent.generateScenarios({
        customerClusterId,
        skillInfo
      });
      
      setGeneratedScenarios(result);
    } catch (error) {
      console.error('Error generating scenarios:', error);
      alert('Error generating scenarios. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Reset the form and results
  const handleReset = () => {
    setSkillInfo({
      slug: '',
      title: '',
      category: 'basicCognitive',
      description: ''
    });
    setCustomerClusterId('expatParentsNL');
    setGeneratedScenarios(null);
  };
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Scenario Generation Tool</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Generate Learning Scenarios</h2>
        
        {/* Skill Information Form */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Skill Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Slug
              </label>
              <input
                type="text"
                name="slug"
                value={skillInfo.slug}
                onChange={handleSkillInfoChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., critical-thinking"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Title
              </label>
              <input
                type="text"
                name="title"
                value={skillInfo.title}
                onChange={handleSkillInfoChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., Critical Thinking"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Category
              </label>
              <select
                name="category"
                value={skillInfo.category}
                onChange={handleSkillInfoChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="basicCognitive">Basic Cognitive Skills</option>
                <option value="transversal">Transversal Skills</option>
                <option value="digitalSkills">Advanced Digital Skills</option>
                <option value="greenSkills">Green Skills</option>
                <option value="specialist">Specialist Skills</option>
                <option value="managerial">Managerial Skills</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Description
              </label>
              <textarea
                name="description"
                value={skillInfo.description}
                onChange={handleSkillInfoChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
                placeholder="Brief description of the skill and its applications"
              ></textarea>
            </div>
          </div>
        </div>
        
        {/* Customer Cluster Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Customer Cluster</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Customer Cluster
            </label>
            <select
              value={customerClusterId}
              onChange={handleClusterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="expatParentsNL">Expat parents in the Netherlands</option>
              <option value="midCareerProfessionals">Mid-career professionals</option>
              <option value="recentGraduates">Recent graduates</option>
            </select>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleGenerateScenarios}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? 'Generating...' : 'Generate Scenarios'}
          </button>
          
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </div>
      
      {/* Generated Scenarios Display */}
      {generatedScenarios && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Generated Scenarios</h2>
          
          {/* Customer Cluster Information */}
          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">
              {generatedScenarios.customerCluster.name}
            </h3>
            <p className="text-gray-600 mb-3">
              {generatedScenarios.customerCluster.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Challenges</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {generatedScenarios.customerCluster.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Needs</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {generatedScenarios.customerCluster.needs.map((need, index) => (
                    <li key={index}>{need}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Scenarios List */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              Scenarios for {generatedScenarios.skillInfo.title || 'this skill'}
            </h3>
            
            {generatedScenarios.scenarios.map((scenario, index) => (
              <div key={index} className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
                {/* Scenario Header */}
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">{scenario.title}</h4>
                      <p className="text-gray-600 mt-1">{scenario.useCase}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Relevance: {scenario.relevanceScore}%
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Progressive Steps */}
                <div className="p-4">
                  <h5 className="text-md font-medium mb-3">5-Step Progressive Process</h5>
                  
                  {/* Discover Step */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <h6 className="text-sm font-semibold">1. Discover</h6>
                      <span className="text-xs text-gray-500">{scenario.progressiveSteps.discover.format}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {scenario.progressiveSteps.discover.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {scenario.progressiveSteps.discover.targetNeeds.map((need, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Learn Step */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <h6 className="text-sm font-semibold">2. Learn</h6>
                      <span className="text-xs text-gray-500">{scenario.progressiveSteps.learn.format}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {scenario.progressiveSteps.learn.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {scenario.progressiveSteps.learn.targetNeeds.map((need, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Practice Step */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <h6 className="text-sm font-semibold">3. Practice</h6>
                      <span className="text-xs text-gray-500">{scenario.progressiveSteps.practice.format}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {scenario.progressiveSteps.practice.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {scenario.progressiveSteps.practice.targetNeeds.map((need, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Apply Step */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <h6 className="text-sm font-semibold">4. Apply</h6>
                      <span className="text-xs text-gray-500">{scenario.progressiveSteps.apply.format}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {scenario.progressiveSteps.apply.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {scenario.progressiveSteps.apply.targetNeeds.map((need, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reflect Step */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <h6 className="text-sm font-semibold">5. Reflect</h6>
                      <span className="text-xs text-gray-500">{scenario.progressiveSteps.reflect.format}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {scenario.progressiveSteps.reflect.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {scenario.progressiveSteps.reflect.targetNeeds.map((need, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedScenarioGenerationTool;
