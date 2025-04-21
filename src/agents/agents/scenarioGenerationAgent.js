// src/agents/agents/scenarioGenerationAgent.js

import agentHub from '../framework/agentHub';
import agentStore from '../framework/agentStore';
import agentRegistry from '../framework/agentRegistry';

/**
 * Scenario Generation Agent
 * 
 * This agent generates tailored scenarios for specific customer clusters
 * based on skill content and demographic information.
 */
const scenarioGenerationAgent = {
  name: 'scenarioGenerationAgent',
  
  /**
   * Initialize the agent and register its commands
   */
  init: function() {
    console.log('Initializing Scenario Generation Agent');
    
    // Register the agent
    agentRegistry.register(this.name, {
      description: 'Generates tailored scenarios for specific customer clusters',
      commands: ['generateScenarios'],
      requests: ['getScenariosByCluster'],
      events: ['scenariosGenerated']
    });
    
    // Initialize state in the store if it doesn't exist
    // Fixed: Check if state exists using proper method from agentStore
    if (!agentStore.getState(this.name)) {
      agentStore.setState(this.name, {
        scenarios: {},
        customerClusters: [
          {
            id: 'expat-parents-young-children',
            name: 'Working Expat Parents with Young Children (0-5)',
            location: 'Maastricht',
            demographics: {
              familyStatus: 'Parents with young children',
              ageRange: '30-45',
              employment: 'Full-time professionals',
              language: 'Non-native Dutch speakers'
            },
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
            location: 'Urban centers',
            demographics: {
              familyStatus: 'Mixed (single and with family)',
              ageRange: '35-50',
              employment: 'Mid to senior level positions',
              language: 'Proficient in business English'
            },
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
            location: 'Various',
            demographics: {
              familyStatus: 'Mostly single',
              ageRange: '22-28',
              employment: 'Entry-level or seeking employment',
              language: 'Digital natives'
            },
            challenges: [
              'Limited practical experience',
              'Building professional network',
              'Adapting to workplace culture',
              'Financial management with new income'
            ]
          }
        ]
      });
    }
    
    // Register command handlers
    agentHub.registerCommandHandler('generateScenarios', this.handleGenerateScenarios.bind(this));
    
    // Register request handlers
    agentHub.registerRequestHandler('getScenariosByCluster', this.handleGetScenariosByCluster.bind(this));
  },
  
  /**
   * Handle the generateScenarios command
   * @param {Object} data - Command data
   * @param {Function} callback - Callback function
   */
  handleGenerateScenarios: function(data, callback) {
    console.log('Generating scenarios for cluster:', data.clusterId);
    
    const state = agentStore.getState(this.name);
    const cluster = state.customerClusters.find(c => c.id === data.clusterId);
    
    if (!cluster) {
      callback({
        success: false,
        error: `Customer cluster with ID "${data.clusterId}" not found`
      });
      return;
    }
    
    // Generate scenarios for the specified skill and cluster
    const scenarios = this.generateScenariosForCluster(data.skillData, cluster);
    
    // Update state with new scenarios
    const updatedScenarios = {
      ...state.scenarios,
      [data.skillData.slug]: {
        ...(state.scenarios[data.skillData.slug] || {}),
        [data.clusterId]: scenarios
      }
    };
    
    agentStore.setState(this.name, {
      ...state,
      scenarios: updatedScenarios
    });
    
    // Emit event
    agentHub.emit('scenariosGenerated', {
      skillSlug: data.skillData.slug,
      clusterId: data.clusterId,
      scenarios: scenarios
    });
    
    // Return success
    callback({
      success: true,
      data: {
        scenarios: scenarios
      }
    });
  },
  
  /**
   * Handle the getScenariosByCluster request
   * @param {Object} data - Request data
   * @param {Function} callback - Callback function
   */
  handleGetScenariosByCluster: function(data, callback) {
    const state = agentStore.getState(this.name);
    const scenarios = state.scenarios[data.skillSlug]?.[data.clusterId] || [];
    
    callback({
      success: true,
      data: {
        scenarios: scenarios,
        cluster: state.customerClusters.find(c => c.id === data.clusterId)
      }
    });
  },
  
  /**
   * Generate scenarios for a specific cluster and skill
   * @param {Object} skillData - Skill data
   * @param {Object} cluster - Customer cluster data
   * @returns {Array} - Generated scenarios
   */
  generateScenariosForCluster: function(skillData, cluster) {
    // Extract relevant information from skill data
    const { title, category, realLifeScenario } = skillData;
    
    // Generate scenarios based on cluster demographics and challenges
    const scenarios = [];
    
    // Basic Cognitive Skills scenarios
    if (category && (category.toLowerCase().includes('basic') || 
        category.toLowerCase().includes('cognitive') || 
        category.toLowerCase().includes('communication'))) {
      
      if (cluster.id === 'expat-parents-young-children') {
        scenarios.push({
          label: "Making Sense of School Tasks (And Explaining Them Simply)",
          use: "Improve your ability to break down school instructions, so you can support your child without frustration.",
          relevance: 0.9,
          context: `As ${cluster.name} in ${cluster.location}, you often face ${cluster.challenges[0]} and ${cluster.challenges[3]}.`,
          problem: "Your child brings home instructions for a school project, but they're written in Dutch and use educational terms you're unfamiliar with.",
          solution: `Using ${title} skills, you can systematically translate and simplify these instructions, making them accessible for both you and your child.`
        });
        
        scenarios.push({
          label: "Talking About School Without Power Struggles",
          use: "Learn how to guide and coach your child through conversations, while picking up Dutch/English school-related terms yourself.",
          relevance: 0.85,
          context: `Living in ${cluster.location} as expat parents, you need to navigate ${cluster.challenges[0]}.`,
          problem: "Your child is reluctant to share details about their school day, and when they do, you struggle to understand the context of what they're describing.",
          solution: `${title} provides techniques to create engaging conversations that help both of you build vocabulary and understanding together.`
        });
      }
      
      else if (cluster.id === 'mid-career-professionals') {
        scenarios.push({
          label: "Translating Complex Ideas for Diverse Teams",
          use: "Enhance your ability to communicate technical concepts to team members with varying backgrounds and expertise levels.",
          relevance: 0.8,
          context: `As a ${cluster.demographics.employment} professional dealing with ${cluster.challenges[3]}, clear communication is essential.`,
          problem: "Your team includes members from different departments and cultural backgrounds, making it difficult to ensure everyone understands project requirements and technical concepts.",
          solution: `${title} equips you with frameworks to adapt your communication style and break down complex ideas into accessible components for diverse audiences.`
        });
      }
      
      else if (cluster.id === 'recent-graduates') {
        scenarios.push({
          label: "Decoding Workplace Expectations",
          use: "Develop skills to understand unwritten workplace rules and expectations in your new professional environment.",
          relevance: 0.9,
          context: `As ${cluster.name} with ${cluster.challenges[2]}, understanding workplace culture can be challenging.`,
          problem: "You're receiving feedback that your communication style isn't 'professional enough,' but you're unsure what specific changes are expected.",
          solution: `${title} helps you analyze communication patterns in your workplace and adapt your approach to meet expectations while maintaining authenticity.`
        });
      }
    }
    
    // If no specific category matches or no scenarios were generated, create a generic scenario
    if (scenarios.length === 0) {
      scenarios.push({
        label: `Applying ${title || 'This Skill'} in Real-Life Situations`,
        use: `Learn practical applications of ${title || 'this skill'} for your specific needs.`,
        relevance: 0.7,
        context: `As part of the ${cluster.name} group, you face unique challenges that this skill can help address.`,
        problem: realLifeScenario || "You encounter situations that require structured approaches and clear thinking.",
        solution: `This skill provides frameworks and techniques to help you navigate these challenges effectively.`
      });
    }
    
    // Sort scenarios by relevance
    return scenarios.sort((a, b) => b.relevance - a.relevance);
  }
};

export default scenarioGenerationAgent;


