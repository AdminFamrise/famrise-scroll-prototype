/**
 * Compact Scenario Generation Agent
 * Generates learning scenarios based on customer profiles and skills
 */

const CompactScenarioAgent = {
  // Customer clusters with basic information
  customerClusters: {
    expatParentsNL: {
      name: 'Expat parents in the Netherlands',
      challenges: ['Language barriers', 'School system navigation', 'Cultural integration'],
      needs: ['Confidence in parenting', 'Educational decision-making', 'Community connection']
    },
    professionals: {
      name: 'Mid-career professionals',
      challenges: ['Career advancement', 'Work-life balance', 'Skill relevance'],
      needs: ['Leadership development', 'Technical upskilling', 'Strategic thinking']
    },
    graduates: {
      name: 'Recent graduates',
      challenges: ['Job market entry', 'Professional identity', 'Financial independence'],
      needs: ['Practical workplace skills', 'Network building', 'Career direction']
    }
  },

  // Skill categories
  skillCategories: {
    basicCognitive: 'Basic Cognitive Skills',
    transversal: 'Transversal Skills',
    digitalSkills: 'Digital Skills',
    managerial: 'Managerial Skills'
  },

  // Initialize the agent
  init: function() {
    console.log('Compact Scenario Generation Agent initialized');
    return true;
  },

  // Generate scenarios based on customer cluster and skill
  generateScenarios: function(params) {
    try {
      const { customerClusterId, skillInfo } = params;
      const cluster = this.customerClusters[customerClusterId];
      
      if (!cluster) {
        return { error: 'Customer cluster not found' };
      }

      // Generate 1-2 scenarios
      const scenarios = [this.createScenario(cluster, skillInfo)];
      
      // Add a second scenario with 50% probability
      if (Math.random() > 0.5) {
        scenarios.push(this.createScenario(cluster, skillInfo));
      }
      
      return {
        customerCluster: cluster,
        skillInfo,
        scenarios
      };
    } catch (error) {
      console.error('Error generating scenarios:', error);
      return { error: 'Failed to generate scenarios' };
    }
  },

  // Create a single scenario
  createScenario: function(cluster, skillInfo) {
    // Generate title based on skill category
    const title = this.generateTitle(cluster, skillInfo);
    
    // Generate use case
    const useCase = this.generateUseCase(cluster, skillInfo);
    
    // Calculate relevance score (0-100)
    const relevanceScore = Math.floor(Math.random() * 30) + 70; // 70-99
    
    // Generate the 5-step process
    const steps = this.generateSteps(cluster, skillInfo);
    
    return {
      title,
      useCase,
      relevanceScore,
      progressiveSteps: steps
    };
  },

  // Generate a scenario title
  generateTitle: function(cluster, skillInfo) {
    const category = skillInfo.category || 'basicCognitive';
    const skillTitle = skillInfo.title || 'This Skill';
    
    const titles = {
      basicCognitive: [
        `Making Sense of ${skillTitle} in Everyday Situations`,
        `Understanding and Applying ${skillTitle}`
      ],
      transversal: [
        `Building Relationships Through ${skillTitle}`,
        `Communicating Effectively with ${skillTitle}`
      ],
      digitalSkills: [
        `Mastering Digital Tools for ${skillTitle}`,
        `Leveraging Technology for ${skillTitle}`
      ],
      managerial: [
        `Leading Teams with ${skillTitle}`,
        `Strategic Application of ${skillTitle}`
      ]
    };
    
    // Get titles for the category or use default
    const categoryTitles = titles[category] || titles.basicCognitive;
    
    // Select a random title
    return categoryTitles[Math.floor(Math.random() * categoryTitles.length)];
  },

  // Generate a use case description
  generateUseCase: function(cluster, skillInfo) {
    const challenge = cluster.challenges[Math.floor(Math.random() * cluster.challenges.length)];
    const need = cluster.needs[Math.floor(Math.random() * cluster.needs.length)];
    const skillTitle = skillInfo.title || 'this skill';
    
    return `Learn how to apply ${skillTitle} to overcome ${challenge.toLowerCase()} and help you ${need.toLowerCase()}.`;
  },

  // Generate the 5-step progressive process
  generateSteps: function(cluster, skillInfo) {
    const skillTitle = skillInfo.title || 'this skill';
    const needs = ['Autonomy', 'Competence', 'Relatedness', 'Confidence', 'Growth'];
    
    const getRandomNeeds = (count) => {
      const result = [];
      for (let i = 0; i < count; i++) {
        result.push(needs[Math.floor(Math.random() * needs.length)]);
      }
      return result;
    };
    
    return {
      discover: {
        format: 'Self-guided',
        description: `Understand how ${skillTitle} applies to your specific situation and challenges.`,
        targetNeeds: getRandomNeeds(2)
      },
      learn: {
        format: 'Self-guided',
        description: `Learn the core principles and techniques of ${skillTitle} through structured content.`,
        targetNeeds: getRandomNeeds(2)
      },
      practice: {
        format: 'Simulation + Peer Challenge',
        description: `Practice applying ${skillTitle} in simulated scenarios relevant to your context.`,
        targetNeeds: getRandomNeeds(2)
      },
      apply: {
        format: 'Real-world task',
        description: `Apply ${skillTitle} to a real challenge you're facing and document your approach.`,
        targetNeeds: getRandomNeeds(2)
      },
      reflect: {
        format: 'Peer Coaching or Group Session',
        description: `Share your experience, receive feedback, and plan for continued improvement.`,
        targetNeeds: getRandomNeeds(2)
      }
    };
  }
};

// Export using CommonJS for better compatibility
module.exports = CompactScenarioAgent;

