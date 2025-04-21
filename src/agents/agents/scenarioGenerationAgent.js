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
    if (!agentStore.hasState(this.name)) {
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
    if (category.toLowerCase().includes('basic') || 
        category.toLowerCase().includes('cognitive') || 
        category.toLowerCase().includes('communication')) {
      
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
    
    // Transversal skills scenarios
    if (category.toLowerCase().includes('transversal') || 
        category.toLowerCase().includes('soft') || 
        category.toLowerCase().includes('teamwork') ||
        category.toLowerCase().includes('leadership')) {
      
      if (cluster.id === 'expat-parents-young-children') {
        scenarios.push({
          label: "Building a Support Network in a New Country",
          use: "Develop strategies to create meaningful connections with other parents and local resources.",
          relevance: 0.85,
          context: `Living in ${cluster.location} with ${cluster.challenges[1]}, building a support network is crucial.`,
          problem: "You need to establish a reliable support system for childcare and emergencies, but cultural differences and language barriers make this challenging.",
          solution: `${title} provides frameworks for identifying potential connections, initiating meaningful relationships, and maintaining a diverse support network.`
        });
      }
      
      else if (cluster.id === 'mid-career-professionals') {
        scenarios.push({
          label: "Leading Cross-Functional Projects",
          use: "Enhance your ability to lead teams with diverse expertise and priorities toward common goals.",
          relevance: 0.9,
          context: `As ${cluster.demographics.employment} dealing with ${cluster.challenges[3]}, effective leadership across departments is essential.`,
          problem: "You're leading a project that requires collaboration between technical, marketing, and operations teams, each with different priorities and communication styles.",
          solution: `${title} equips you with strategies to align diverse perspectives, facilitate productive discussions, and build consensus around shared objectives.`
        });
      }
      
      else if (cluster.id === 'recent-graduates') {
        scenarios.push({
          label: "Contributing Effectively in Team Settings",
          use: "Learn how to add value to team projects while establishing your professional reputation.",
          relevance: 0.85,
          context: `As ${cluster.name} with ${cluster.challenges[0]}, finding your place in team dynamics can be challenging.`,
          problem: "You want to contribute meaningfully to team projects, but you're unsure how to balance assertiveness with respect for more experienced colleagues.",
          solution: `${title} provides frameworks for understanding team dynamics, identifying opportunities to contribute, and communicating your ideas effectively.`
        });
      }
    }
    
    // Advanced Digital skills scenarios
    if (category.toLowerCase().includes('digital') || 
        category.toLowerCase().includes('technical') || 
        category.toLowerCase().includes('technology')) {
      
      if (cluster.id === 'expat-parents-young-children') {
        scenarios.push({
          label: "Navigating Digital School Platforms",
          use: "Master the digital tools used by your child's school to stay informed and engaged.",
          relevance: 0.8,
          context: `As ${cluster.name} dealing with ${cluster.challenges[3]}, understanding school communication systems is important.`,
          problem: "Your child's school uses multiple digital platforms for assignments, communication, and progress tracking, all in Dutch.",
          solution: `${title} helps you develop strategies to efficiently navigate these systems, set up translations, and organize information to stay on top of your child's education.`
        });
      }
      
      else if (cluster.id === 'mid-career-professionals') {
        scenarios.push({
          label: "Leveraging Digital Tools for Team Productivity",
          use: "Implement digital solutions that enhance your team's efficiency and collaboration.",
          relevance: 0.9,
          context: `As ${cluster.demographics.employment} facing ${cluster.challenges[2]}, staying current with digital tools is essential.`,
          problem: "Your team's productivity is hampered by inefficient processes and communication gaps that could be addressed with better digital tools.",
          solution: `${title} provides a framework for evaluating, implementing, and optimizing digital solutions that address your team's specific challenges.`
        });
      }
      
      else if (cluster.id === 'recent-graduates') {
        scenarios.push({
          label: "Applying Digital Skills to Entry-Level Challenges",
          use: "Leverage your digital fluency to add immediate value in your new role.",
          relevance: 0.95,
          context: `As ${cluster.demographics.language} with ${cluster.challenges[0]}, your digital skills can be a significant advantage.`,
          problem: "You notice inefficient manual processes in your new workplace that could be automated or improved with digital tools.",
          solution: `${title} helps you identify opportunities for digital enhancement, develop proposals that demonstrate value, and implement solutions that showcase your skills.`
        });
      }
    }
    
    // Managerial skills scenarios
    if (category.toLowerCase().includes('managerial') || 
        category.toLowerCase().includes('leadership') || 
        category.toLowerCase().includes('management')) {
      
      if (cluster.id === 'expat-parents-young-children') {
        scenarios.push({
          label: "Managing Family-Work Integration in a New Country",
          use: "Develop strategies to balance professional responsibilities with family needs in an unfamiliar environment.",
          relevance: 0.85,
          context: `As ${cluster.name} dealing with ${cluster.challenges[2]}, effective time and resource management is crucial.`,
          problem: "Without extended family nearby and with limited understanding of local resources, balancing work deadlines with childcare responsibilities is particularly challenging.",
          solution: `${title} provides frameworks for prioritization, delegation, and resource allocation that help you create sustainable routines for your family.`
        });
      }
      
      else if (cluster.id === 'mid-career-professionals') {
        scenarios.push({
          label: "Revitalizing Team Performance",
          use: "Implement management approaches that energize your team and drive innovation.",
          relevance: 0.9,
          context: `As ${cluster.demographics.employment} facing ${cluster.challenges[0]}, finding new ways to inspire performance is essential.`,
          problem: "Your team has become comfortable with established processes, resulting in declining innovation and engagement.",
          solution: `${title} equips you with strategies to assess team dynamics, introduce productive challenges, and create an environment that fosters creativity and growth.`
        });
      }
      
      else if (cluster.id === 'recent-graduates') {
        scenarios.push({
          label: "Managing Projects Without Formal Authority",
          use: "Learn to coordinate work and influence outcomes without managerial title or experience.",
          relevance: 0.8,
          context: `As ${cluster.name} with ${cluster.challenges[1]}, you need to demonstrate leadership potential.`,
          problem: "You've been asked to coordinate a project involving peers and some senior colleagues, but you have no formal authority over the team members.",
          solution: `${title} provides approaches for building credibility, facilitating effective collaboration, and ensuring accountability through influence rather than authority.`
        });
      }
    }
    
    // If no specific category matches, create generic scenarios based on the real-life scenario
    if (scenarios.length === 0 && realLifeScenario) {
      if (cluster.id === 'expat-parents-young-children') {
        scenarios.push({
          label: `Applying ${title} to Parenting Challenges`,
          use: `Use ${title} to navigate common challenges faced by expat parents.`,
          relevance: 0.75,
          context: `As ${cluster.name} in ${cluster.location}, you face unique challenges in supporting your children's development.`,
          problem: realLifeScenario,
          solution: `${title} provides tools and approaches to address this scenario effectively, helping both you and your children thrive.`
        });
      }
      
      else if (cluster.id === 'mid-career-professionals') {
        scenarios.push({
          label: `Leveraging ${title} for Career Advancement`,
          use: `Apply ${title} to overcome professional plateaus and drive your career forward.`,
          relevance: 0.75,
          context: `As ${cluster.demographics.employment} dealing with ${cluster.challenges[0]}, finding new growth opportunities is essential.`,
          problem: realLifeScenario,
          solution: `${title} equips you with approaches to address this challenge and create new pathways for professional development.`
        });
      }
      
      else if (cluster.id === 'recent-graduates') {
        scenarios.push({
          label: `Using ${title} to Stand Out as a New Professional`,
          use: `Apply ${title} to distinguish yourself in your early career.`,
          relevance: 0.75,
          context: `As ${cluster.name} with ${cluster.challenges[0]} and ${cluster.challenges[1]}, establishing your professional identity is crucial.`,
          problem: realLifeScenario,
          solution: `${title} provides strategies to address this challenge effectively and build a strong foundation for your career.`
        });
      }
    }
    
    // Sort scenarios by relevance
    return scenarios.sort((a, b) => b.relevance - a.relevance);
  }
};

export default scenarioGenerationAgent;

