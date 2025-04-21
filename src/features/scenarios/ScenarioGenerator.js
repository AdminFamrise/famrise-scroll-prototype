import React, { useState } from 'react';

/**
 * ScenarioGenerator - A component for generating learning scenarios
 * 
 * Allows admins to create scenarios for different customer clusters and skill areas
 */
const ScenarioGenerator = () => {
  // State for form inputs
  const [skillArea, setSkillArea] = useState('');
  const [customerCluster, setCustomerCluster] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [scenarioCount, setScenarioCount] = useState(3);
  const [generatedScenarios, setGeneratedScenarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for dropdowns
  const skillAreas = [
    'Communication', 
    'Problem Solving', 
    'Critical Thinking',
    'Financial Literacy',
    'Digital Skills',
    'Time Management'
  ];

  const customerClusters = [
    'Young Adults (18-25)',
    'Parents',
    'Career Professionals',
    'Retirees',
    'Small Business Owners'
  ];

  // Styles
  const styles = {
    container: {
      maxWidth: '800px',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    form: {
      marginBottom: '30px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500'
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px'
    },
    rangeContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    range: {
      flex: 1,
      marginRight: '10px'
    },
    rangeValue: {
      minWidth: '30px',
      textAlign: 'center'
    },
    button: {
      backgroundColor: '#1e3a8a',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonDisabled: {
      opacity: 0.7,
      cursor: 'not-allowed'
    },
    scenarioList: {
      marginTop: '30px'
    },
    scenarioItem: {
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      border: '1px solid #e2e8f0'
    },
    scenarioTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '10px'
    },
    scenarioDescription: {
      marginBottom: '15px',
      lineHeight: '1.5'
    },
    scenarioMeta: {
      display: 'flex',
      fontSize: '14px',
      color: '#64748b'
    },
    scenarioMetaItem: {
      marginRight: '15px',
      display: 'flex',
      alignItems: 'center'
    },
    spinner: {
      marginLeft: '10px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '3px solid rgba(255,255,255,0.3)',
      borderTopColor: 'white',
      animation: 'spin 1s linear infinite'
    }
  };

  const generateScenarios = () => {
    if (!skillArea || !customerCluster) return;
    setIsLoading(true);

    setTimeout(() => {
      const scenarios = [];
      for (let i = 0; i < scenarioCount; i++) {
        scenarios.push({
          id: Date.now() + i,
          title: `${skillArea} Scenario ${i + 1} for ${customerCluster}`,
          description: generateScenarioDescription(skillArea, customerCluster, difficulty),
          skillArea,
          customerCluster,
          difficulty
        });
      }
      setGeneratedScenarios(scenarios);
      setIsLoading(false);
    }, 1500);
  };

  const generateScenarioDescription = (skill, cluster, difficulty) => {
    const scenarios = {
      'Communication': {
        'Young Adults (18-25)': 'Navigate a difficult conversation with a roommate about shared living expenses.',
        'Parents': 'Discuss screen time limits with your teenager who disagrees with your rules.',
        'Career Professionals': 'Present a new project idea to stakeholders who have competing priorities.',
        'Retirees': 'Explain your healthcare needs to a new doctor who seems rushed.',
        'Small Business Owners': 'Negotiate better terms with a supplier while maintaining a good relationship.'
      },
      'Problem Solving': {
        'Young Adults (18-25)': 'Figure out how to balance a part-time job with full-time studies.',
        'Parents': 'Develop a solution for childcare when your regular arrangement falls through.',
        'Career Professionals': "Resolve a conflict between team members that's affecting productivity.",
        'Retirees': "Adapt to new technology that's required for managing your healthcare.",
        'Small Business Owners': 'Address an unexpected supply chain disruption affecting your inventory.'
      },
      'Financial Literacy': {
        'Young Adults (18-25)': 'Create a budget plan to save for a major purchase while paying off student loans.',
        'Parents': "Develop a strategy for saving for your child's education while managing household expenses.",
        'Career Professionals': 'Optimize your retirement contributions while balancing current financial needs.',
        'Retirees': 'Adjust your budget to account for fixed income and potential healthcare costs.',
        'Small Business Owners': 'Manage cash flow during a seasonal downturn in your business.'
      }
    };

    const defaultScenario = `Apply ${skill} skills in a realistic situation typical for ${cluster}.`;
    const baseScenario = scenarios[skill]?.[cluster] || defaultScenario;

    const difficultyModifiers = {
      'easy': 'The situation is straightforward with clear options to choose from.',
      'medium': 'The situation has some complexity with a few challenging aspects to navigate.',
      'hard': 'The situation is highly complex with multiple stakeholders and competing priorities.'
    };

    return `${baseScenario} ${difficultyModifiers[difficulty]}`;
  };

  return (
    <div style={styles.container}>
      <h2>Scenario Generator</h2>
      <p>Create learning scenarios for different skill areas and customer clusters.</p>

      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Skill Area</label>
          <select style={styles.select} value={skillArea} onChange={(e) => setSkillArea(e.target.value)}>
            <option value="">Select a skill area</option>
            {skillAreas.map(skill => (
              <option key={skill} value={skill}>{skill}</option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Customer Cluster</label>
          <select style={styles.select} value={customerCluster} onChange={(e) => setCustomerCluster(e.target.value)}>
            <option value="">Select a customer cluster</option>
            {customerClusters.map(cluster => (
              <option key={cluster} value={cluster}>{cluster}</option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Difficulty</label>
          <select style={styles.select} value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Number of Scenarios: {scenarioCount}</label>
          <div style={styles.rangeContainer}>
            <input type="range" min="1" max="5" value={scenarioCount} onChange={(e) => setScenarioCount(parseInt(e.target.value))} style={styles.range} />
            <span style={styles.rangeValue}>{scenarioCount}</span>
          </div>
        </div>

        <button 
          onClick={generateScenarios}
          disabled={!skillArea || !customerCluster || isLoading}
          style={{
            ...styles.button,
            ...((!skillArea || !customerCluster || isLoading) ? styles.buttonDisabled : {})
          }}
        >
          Generate Scenarios
          {isLoading && <span style={styles.spinner}></span>}
        </button>
      </div>

      {generatedScenarios.length > 0 && (
        <div style={styles.scenarioList}>
          <h3>Generated Scenarios</h3>
          {generatedScenarios.map(scenario => (
            <div key={scenario.id} style={styles.scenarioItem}>
              <div style={styles.scenarioTitle}>{scenario.title}</div>
              <div style={styles.scenarioDescription}>{scenario.description}</div>
              <div style={styles.scenarioMeta}>
                <div style={styles.scenarioMetaItem}><span>Skill: {scenario.skillArea}</span></div>
                <div style={styles.scenarioMetaItem}><span>Audience: {scenario.customerCluster}</span></div>
                <div style={styles.scenarioMetaItem}><span>Difficulty: {scenario.difficulty}</span></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScenarioGenerator;
