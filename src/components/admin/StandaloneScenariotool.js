import React, { useState } from 'react';

/**
 * Standalone Scenario Generation Tool
 * 
 * This component works independently without requiring the agent framework
 */
const StandaloneScenarioTool = () => {
  // State for form inputs
  const [skillData, setSkillData] = useState({
    slug: '',
    title: '',
    category: '',
    realLifeScenario: '',
    overview: ''
  });
  
  // State for selected cluster and generated scenarios
  const [selectedCluster, setSelectedCluster] = useState('expat-parents-young-children');
  const [scenarios, setScenarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // Predefined customer clusters
  const customerClusters = [
    { 
      id: 'expat-parents-young-children', 
      name: 'Working Expat Parents with Young Children (0-5) in Maastricht',
      challenges: [
        'Language barrier in school communication',
        'Limited social network for childcare support',
        'Balancing work and family responsibilities',
        'Navigating unfamiliar educational system'
      ]
    },
    { 
      id: 'mid-career-professionals', 
      name: 'Mid-Career Professionals Seeking Growth',
      challenges: [
        'Career plateau or stagnation',
        'Work-life balance struggles',
        'Keeping skills relevant in changing market',
        'Managing teams with diverse backgrounds'
      ]
    },
    { 
      id: 'recent-graduates', 
      name: 'Recent Graduates Entering Workforce',
      challenges: [
        'Limited practical experience',
        'Building professional network',
        'Adapting to workplace culture',
        'Financial management with new income'
      ]
    }
  ];
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSkillData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle cluster selection
  const handleClusterChange = (e) => {
    setSelectedCluster(e.target.value);
  };
  
  // Generate scenarios based on skill data and selected cluster
  const handleGenerateScenarios = () => {
    if (!skillData.title) {
      setMessage('Please fill in at least the Title field');
      return;
    }
    
    setIsLoading(true);
    setMessage('Generating scenarios...');
    
    // Simulate processing time
    setTimeout(() => {
      const generatedScenarios = generateScenarios(skillData, selectedCluster);
      setScenarios(generatedScenarios);
      setMessage(`Generated ${generatedScenarios.length} scenarios for this customer cluster`);
      setIsLoading(false);
    }, 1000);
  };
  
  // Function to generate scenarios based on skill and cluster
  const generateScenarios = (skill, clusterId) => {
    const cluster = customerClusters.find(c => c.id === clusterId);
    if (!cluster) return [];
    
    const scenarios = [];
    const { title, category, realLifeScenario } = skill;
    
    // Basic Cognitive Skills scenarios
    if (category && (
        category.toLowerCase().includes('basic') || 
        category.toLowerCase().includes('cognitive') || 
        category.toLowerCase().includes('communication')
    )) {
      if (clusterId === 'expat-parents-young-children') {
        scenarios.push({
          label: "Making Sense of School Tasks (And Explaining Them Simply)",
          use: "Improve your ability to break down school instructions, so you can support your child without frustration.",
          relevance: 0.9,
          context: `As a parent of young children in Maastricht, you often face language barriers and unfamiliar educational systems.`,
          problem: "Your child brings home instructions for a school project, but they're written in Dutch and use educational terms you're unfamiliar with.",
          solution: `Using ${title} skills, you can systematically translate and simplify these instructions, making them accessible for both you and your child.`
        });
        
        scenarios.push({
          label: "Talking About School Without Power Struggles",
          use: "Learn how to guide and coach your child through conversations, while picking up Dutch/English school-related terms yourself.",
          relevance: 0.85,
          context: `Living in Maastricht as expat parents, you need to navigate language barriers.`,
          problem: "Your child is reluctant to share details about their school day, and when they do, you struggle to understand the context of what they're describing.",
          solution: `${title} provides techniques to create engaging conversations that help both of you build vocabulary and understanding together.`
        });
      }
      
      else if (clusterId === 'mid-career-professionals') {
        scenarios.push({
          label: "Translating Complex Ideas for Diverse Teams",
          use: "Enhance your ability to communicate technical concepts to team members with varying backgrounds and expertise levels.",
          relevance: 0.8,
          context: `As a mid to senior level professional dealing with diverse teams, clear communication is essential.`,
          problem: "Your team includes members from different departments and cultural backgrounds, making it difficult to ensure everyone understands project requirements and technical concepts.",
          solution: `${title} equips you with frameworks to adapt your communication style and break down complex ideas into accessible components for diverse audiences.`
        });
      }
      
      else if (clusterId === 'recent-graduates') {
        scenarios.push({
          label: "Decoding Workplace Expectations",
          use: "Develop skills to understand unwritten workplace rules and expectations in your new professional environment.",
          relevance: 0.9,
          context: `As a recent graduate adapting to workplace culture can be challenging.`,
          problem: "You're receiving feedback that your communication style isn't 'professional enough,' but you're unsure what specific changes are expected.",
          solution: `${title} helps you analyze communication patterns in your workplace and adapt your approach to meet expectations while maintaining authenticity.`
        });
      }
    }
    
    // Transversal skills scenarios
    if (category && (
        category.toLowerCase().includes('transversal') || 
        category.toLowerCase().includes('soft') || 
        category.toLowerCase().includes('teamwork') ||
        category.toLowerCase().includes('leadership')
    )) {
      if (clusterId === 'expat-parents-young-children') {
        scenarios.push({
          label: "Building a Support Network in a New Country",
          use: "Develop strategies to create meaningful connections with other parents and local resources.",
          relevance: 0.85,
          context: `Living in Maastricht with limited social networks, building a support system is crucial.`,
          problem: "You need to establish a reliable support system for childcare and emergencies, but cultural differences and language barriers make this challenging.",
          solution: `${title} provides frameworks for identifying potential connections, initiating meaningful relationships, and maintaining a diverse support network.`
        });
      }
      
      else if (clusterId === 'mid-career-professionals') {
        scenarios.push({
          label: "Leading Cross-Functional Projects",
          use: "Enhance your ability to lead teams with diverse expertise and priorities toward common goals.",
          relevance: 0.9,
          context: `As a mid to senior level professional dealing with diverse teams, effective leadership across departments is essential.`,
          problem: "You're leading a project that requires collaboration between technical, marketing, and operations teams, each with different priorities and communication styles.",
          solution: `${title} equips you with strategies to align diverse perspectives, facilitate productive discussions, and build consensus around shared objectives.`
        });
      }
    }
    
    // If no scenarios were generated, create a generic one
    if (scenarios.length === 0) {
      scenarios.push({
        label: `Applying ${title} in Real-Life Situations`,
        use: `Learn practical applications of ${title} for your specific needs.`,
        relevance: 0.7,
        context: `As part of the ${cluster.name} group, you face unique challenges that this skill can help address.`,
        problem: realLifeScenario || "You encounter situations that require structured approaches and clear thinking.",
        solution: `${title} provides frameworks and techniques to help you navigate these challenges effectively.`
      });
    }
    
    // Sort scenarios by relevance
    return scenarios.sort((a, b) => b.relevance - a.relevance);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
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
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? 'Generating...' : 'Generate Scenarios'}
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

export default StandaloneScenarioTool;
