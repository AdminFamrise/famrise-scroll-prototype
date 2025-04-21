import React, { useState, useEffect } from 'react';
import { useAgentCommand } from '../../agents/hooks/useAgent';

const ScenarioGenerationTool = () => {
  const [skillData, setSkillData] = useState({
    slug: '',
    title: '',
    category: '',
    realLifeScenario: '',
    overview: ''
  });
  
  const [selectedCluster, setSelectedCluster] = useState('expat-parents-young-children');
  const [scenarios, setScenarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const { execute, isLoading: isGenerating, error } = useAgentCommand('generateScenarios');
  
  const customerClusters = [
    { id: 'expat-parents-young-children', name: 'Working Expat Parents with Young Children (0-5) in Maastricht' },
    { id: 'mid-career-professionals', name: 'Mid-Career Professionals Seeking Growth' },
    { id: 'recent-graduates', name: 'Recent Graduates Entering Workforce' }
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkillData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleClusterChange = (e) => {
    setSelectedCluster(e.target.value);
  };
  
  const handleGenerateScenarios = async () => {
    if (!skillData.slug || !skillData.title || !skillData.category) {
      setMessage('Please fill in at least the Slug, Title, and Category fields');
      return;
    }
    
    setIsLoading(true);
    setMessage('Generating scenarios...');
    
    try {
      const result = await execute({
        skillData,
        clusterId: selectedCluster
      });
      
      if (result.success) {
        setScenarios(result.data.scenarios);
        setMessage(`Generated ${result.data.scenarios.length} scenarios for this customer cluster`);
      } else {
        setMessage(`Error: ${result.error || 'Failed to generate scenarios'}`);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Scenario Generation Tool</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Skill Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skill Slug</label>
            <input
              type="text"
              name="slug"
              value={skillData.slug}
              onChange={handleInputChange}
              placeholder="e.g., critical-thinking"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Skill Title</label>
            <input
              type="text"
              name="title"
              value={skillData.title}
              onChange={handleInputChange}
              placeholder="e.g., Critical Thinking"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={skillData.category}
              onChange={handleInputChange}
              placeholder="e.g., Basic Cognitive Skills"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Real-Life Scenario</label>
            <input
              type="text"
              name="realLifeScenario"
              value={skillData.realLifeScenario}
              onChange={handleInputChange}
              placeholder="e.g., Evaluating information in a complex work situation"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Overview</label>
          <textarea
            name="overview"
            value={skillData.overview}
            onChange={handleInputChange}
            placeholder="Brief description of the skill..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
          />
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Customer Cluster</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer Cluster</label>
          <select
            value={selectedCluster}
            onChange={handleClusterChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            {customerClusters.map(cluster => (
              <option key={cluster.id} value={cluster.id}>
                {cluster.name}
              </option>
            ))}
          </select>
        </div>
        
        <button
          onClick={handleGenerateScenarios}
          disabled={isLoading || isGenerating}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading || isGenerating ? 'Generating...' : 'Generate Scenarios'}
        </button>
        
        {message && (
          <div className={`mt-4 p-3 rounded-md ${message.startsWith('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
      </div>
      
      {scenarios.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Generated Scenarios</h2>
          
          {scenarios.map((scenario, index) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{scenario.label}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Relevance: {Math.round(scenario.relevance * 100)}%
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{scenario.use}</p>
              
              <div className="bg-gray-50 p-3 rounded-md mb-3">
                <p className="text-sm text-gray-700"><strong>Context:</strong> {scenario.context}</p>
              </div>
              
              <div className="bg-red-50 p-3 rounded-md mb-3">
                <p className="text-sm text-gray-700"><strong>Problem:</strong> {scenario.problem}</p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-md">
                <p className="text-sm text-gray-700"><strong>Solution:</strong> {scenario.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScenarioGenerationTool;

