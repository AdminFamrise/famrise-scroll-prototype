import React, { useState } from 'react';

const BasicScenarioTool = () => {
  const [skillInfo, setSkillInfo] = useState({
    title: '',
    category: '',
    description: ''
  });
  
  const [customerCluster, setCustomerCluster] = useState('expat_parents');
  const [scenarios, setScenarios] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSkillInfoChange = (e) => {
    const { name, value } = e.target;
    setSkillInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCustomerClusterChange = (e) => {
    setCustomerCluster(e.target.value);
  };

  const generateScenarios = () => {
    setIsGenerating(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const generatedScenarios = [
        {
          id: 1,
          title: `Using ${skillInfo.title} in daily family routines`,
          problem: `As an expat parent in a new country, establishing consistent family routines while adapting to a different culture can be challenging, especially when trying to incorporate ${skillInfo.title}.`,
          solution: `Learning ${skillInfo.title} helps create structured approaches to family organization that respect both your home culture and new environment.`,
          relevanceScore: 0.89,
          customerCluster: 'Expat parents with young children'
        },
        {
          id: 2,
          title: `${skillInfo.title} for cross-cultural communication`,
          problem: `When children attend local schools while parents maintain home country traditions, communication gaps can develop, affecting family harmony.`,
          solution: `${skillInfo.title} provides frameworks for effective cross-cultural communication within the family unit, helping bridge generational and cultural divides.`,
          relevanceScore: 0.76,
          customerCluster: 'Expat parents with young children'
        },
        {
          id: 3,
          title: `Balancing work and family with ${skillInfo.title}`,
          problem: `Expat professionals often face increased work demands while simultaneously helping their family adjust to a new environment, creating time management challenges.`,
          solution: `${skillInfo.title} offers practical techniques for balancing professional responsibilities with family needs during cultural transition periods.`,
          relevanceScore: 0.82,
          customerCluster: 'Expat parents with young children'
        }
      ];
      
      setScenarios(generatedScenarios);
      setIsGenerating(false);
    }, 1500);
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const cardStyle = {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#2d3748'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#4a5568'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    marginBottom: '16px'
  };

  const selectStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #e2e8f0',
    borderRadius: '4px',
    marginBottom: '16px',
    backgroundColor: '#fff'
  };

  const buttonStyle = {
    backgroundColor: '#4299e1',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#a0aec0',
    cursor: 'not-allowed'
  };

  const scenarioCardStyle = {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#f7fafc'
  };

  const scenarioTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#2d3748'
  };

  const sectionTitleStyle = {
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '12px',
    marginBottom: '4px',
    color: '#4a5568'
  };

  const scoreStyle = {
    display: 'inline-block',
    padding: '4px 8px',
    backgroundColor: '#ebf8ff',
    color: '#3182ce',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Scenario Generation Tool</h1>
      
      <div style={cardStyle}>
        <h2 style={{...headingStyle, fontSize: '20px'}}>Skill Information</h2>
        
        <label style={labelStyle} htmlFor="title">
          Skill Title
        </label>
        <input
          style={inputStyle}
          type="text"
          id="title"
          name="title"
          value={skillInfo.title}
          onChange={handleSkillInfoChange}
          placeholder="e.g., Critical Thinking"
        />
        
        <label style={labelStyle} htmlFor="category">
          Skill Category
        </label>
        <select
          style={selectStyle}
          id="category"
          name="category"
          value={skillInfo.category}
          onChange={handleSkillInfoChange}
        >
          <option value="">Select a category</option>
          <option value="basic_cognitive">Basic Cognitive Skills</option>
          <option value="transversal">Transversal Skills</option>
          <option value="digital">Advanced Digital Skills</option>
          <option value="green">Green Skills</option>
          <option value="specialist">Specialist Skills</option>
          <option value="managerial">Managerial Skills</option>
        </select>
        
        <label style={labelStyle} htmlFor="description">
          Skill Description
        </label>
        <textarea
          style={{...inputStyle, minHeight: '100px'}}
          id="description"
          name="description"
          value={skillInfo.description}
          onChange={handleSkillInfoChange}
          placeholder="Brief description of the skill..."
        />
      </div>
      
      <div style={cardStyle}>
        <h2 style={{...headingStyle, fontSize: '20px'}}>Customer Cluster</h2>
        
        <label style={labelStyle} htmlFor="customerCluster">
          Select Customer Cluster
        </label>
        <select
          style={selectStyle}
          id="customerCluster"
          value={customerCluster}
          onChange={handleCustomerClusterChange}
        >
          <option value="expat_parents">Expat parents with young children</option>
          <option value="mid_career">Mid-career professionals</option>
          <option value="recent_graduates">Recent graduates</option>
          <option value="remote_workers">Remote workers</option>
          <option value="entrepreneurs">Entrepreneurs and small business owners</option>
        </select>
      </div>
      
      <button
        style={isGenerating ? disabledButtonStyle : buttonStyle}
        onClick={generateScenarios}
        disabled={isGenerating || !skillInfo.title}
      >
        {isGenerating ? 'Generating...' : 'Generate Scenarios'}
      </button>
      
      {scenarios.length > 0 && (
        <div style={{marginTop: '24px'}}>
          <h2 style={{...headingStyle, fontSize: '20px'}}>Generated Scenarios</h2>
          
          {scenarios.map(scenario => (
            <div key={scenario.id} style={scenarioCardStyle}>
              <h3 style={scenarioTitleStyle}>{scenario.title}</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                <span>{scenario.customerCluster}</span>
                <span style={scoreStyle}>Relevance: {scenario.relevanceScore.toFixed(2)}</span>
              </div>
              
              <div>
                <h4 style={sectionTitleStyle}>Problem:</h4>
                <p>{scenario.problem}</p>
                
                <h4 style={sectionTitleStyle}>Solution:</h4>
                <p>{scenario.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BasicScenarioTool;
