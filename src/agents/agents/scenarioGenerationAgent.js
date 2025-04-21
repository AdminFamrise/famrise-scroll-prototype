// src/agents/agents/scenarioGenerationAgent.js

import agentHub from '../framework/agentHub';
import agentStore from '../framework/agentStore';
import agentRegistry from '../framework/agentRegistry';

const scenarioGenerationAgent = {
  // Agent metadata
  id: 'scenarioGenerationAgent',
  name: 'Scenario Generation Agent',
  description: 'Adapts content to create relevant scenarios for specific customer clusters',
  
  // Initialize the agent
  init: function() {
    // Register with the registry
    agentRegistry.register(this.id, {
      name: this.name,
      description: this.description,
      capabilities: ['generateScenarios', 'getScenariosByCluster']
    });
    
    // Set up command handlers
    this._setupCommandHandlers();
    
    // Set up request handlers
    this._setupRequestHandlers();
    
    // Mark as initialized
    agentRegistry.updateStatus(this.id, 'active');
    
    console.log(`Agent ${this.name} initialized`);
  },
  
  // Set up command handlers
  _setupCommandHandlers: function() {
    agentHub.onCommand('generateScenarios', this._executeGenerateScenarios.bind(this));
  },
  
  // Command handlers
  _executeGenerateScenarios: function(data) {
    console.log(`Agent ${this.name} executing generateScenarios:`, data);
    
    if (!data.skillId || !data.clusterInfo) {
      return { 
        success: false, 
        error: 'Missing skillId or clusterInfo' 
      };
    }
    
    // Get the skill content
    const skillContent = agentStore.get(`content.structured.${data.skillId}`);
    
    if (!skillContent) {
      return { 
        success: false, 
        error: 'Skill content not found' 
      };
    }
    
    // Generate scenarios based on cluster info
    const scenarios = this._generateScenariosForCluster(skillContent, data.clusterInfo);
    
    // Store the generated scenarios
    const scenarioId = `scenario-${data.skillId}-${Date.now()}`;
    agentStore.update(`scenarios.${scenarioId}`, {
      skillId: data.skillId,
      clusterInfo: data.clusterInfo,
      scenarios: scenarios,
      timestamp: Date.now()
    });
    
    // Publish event
    agentHub.publish('scenariosGenerated', {
      scenarioId: scenarioId,
      skillId: data.skillId,
      timestamp: Date.now()
    });
    
    return { 
      success: true, 
      scenarioId: scenarioId,
      scenarios: scenarios
    };
  },
  
  // Set up request handlers
  _setupRequestHandlers: function() {
    agentHub.onRequest('getScenariosByCluster', this._handleGetScenariosByCluster.bind(this));
  },
  
  // Request handlers
  _handleGetScenariosByCluster: function(data, respond) {
    console.log(`Agent ${this.name} handling getScenariosByCluster:`, data);
    
    if (!data.clusterInfo) {
      respond({ 
        success: false, 
        error: 'Missing clusterInfo' 
      });
      return;
    }
    
    // Get all scenarios
    const allScenarios = agentStore.get('scenarios');
    
    if (!allScenarios) {
      respond({ 
        success: false, 
        error: 'No scenarios found' 
      });
      return;
    }
    
    // Filter scenarios by cluster match
    const matchingScenarios = this._filterScenariosByCluster(allScenarios, data.clusterInfo);
    
    respond({ 
      success: true, 
      data: matchingScenarios 
    });
  },
  
  // Helper: Generate scenarios for a specific cluster
  _generateScenariosForCluster: function(skillContent, clusterInfo) {
    // Extract relevant information from cluster info
    const { 
      location, 
      professionalBackground, 
      psychologicalNeeds, 
      socialNeeds, 
      culturalContext, 
      currentChallenges, 
      profileData 
    } = clusterInfo;
    
    // Generate scenarios based on skill content and cluster info
    const scenarios = [];
    
    // Process each section of the skill content
    Object.entries(skillContent).forEach(([section, data]) => {
      // Basic cognitive skills scenario
      if (section === 'discover' || section === 'learn') {
        // For parents with young children
        if (profileData && profileData.hasChildren && profileData.childrenAgeRange === '0-12') {
          const scenario = {
            skillSection: section,
            realLifeScenario: "Help my preschool or school child(ren) to better succeed",
            scenarioLabel: this._generateScenarioLabel(section, data.title, clusterInfo),
            use: this._generateScenarioUse(section, data.content, clusterInfo),
            relevance: this._calculateRelevance(clusterInfo)
          };
          scenarios.push(scenario);
        }
        
        // For working professionals
        if (professionalBackground && professionalBackground.isEmployed) {
          const scenario = {
            skillSection: section,
            realLifeScenario: "Improve my effectiveness at work",
            scenarioLabel: this._generateScenarioLabel(section, data.title, clusterInfo),
            use: this._generateScenarioUse(section, data.content, clusterInfo),
            relevance: this._calculateRelevance(clusterInfo)
          };
          scenarios.push(scenario);
        }
      }
      
      // Communication skills scenario
      if (section === 'practice' || section === 'apply') {
        // For expats
        if (culturalContext && culturalContext.isExpat) {
          const scenario = {
            skillSection: section,
            realLifeScenario: "Navigate cultural differences in my new environment",
            scenarioLabel: this._generateScenarioLabel(section, data.title, clusterInfo),
            use: this._generateScenarioUse(section, data.content, clusterInfo),
            relevance: this._calculateRelevance(clusterInfo)
          };
          scenarios.push(scenario);
        }
        
        // For those with social needs
        if (socialNeeds && socialNeeds.improveCommunication) {
          const scenario = {
            skillSection: section,
            realLifeScenario: "Build better relationships with others",
            scenarioLabel: this._generateScenarioLabel(section, data.title, clusterInfo),
            use: this._generateScenarioUse(section, data.content, clusterInfo),
            relevance: this._calculateRelevance(clusterInfo)
          };
          scenarios.push(scenario);
        }
      }
      
      // Reflection and bridge scenarios
      if (section === 'reflect' || section === 'bridge') {
        // For those with psychological needs
        if (psychologicalNeeds && psychologicalNeeds.personalGrowth) {
          const scenario = {
            skillSection: section,
            realLifeScenario: "Develop a growth mindset and overcome challenges",
            scenarioLabel: this._generateScenarioLabel(section, data.title, clusterInfo),
            use: this._generateScenarioUse(section, data.content, clusterInfo),
            relevance: this._calculateRelevance(clusterInfo)
          };
          scenarios.push(scenario);
        }
      }
    });
    
    // Sort scenarios by relevance
    return scenarios.sort((a, b) => b.relevance - a.relevance);
  },
  
  // Helper: Generate scenario label based on skill section and cluster info
  _generateScenarioLabel: function(section, title, clusterInfo) {
    // Example for parents of young children in Maastricht
    if (clusterInfo.location === 'Maastricht' && 
        clusterInfo.profileData && 
        clusterInfo.profileData.hasChildren && 
        clusterInfo.profileData.childrenAgeRange === '0-5') {
      
      switch(section) {
        case 'discover':
          return "Making Sense of School Tasks (And Explaining Them Simply)";
        case 'learn':
          return "Understanding Dutch School Expectations";
        case 'practice':
          return "Talking About School Without Power Struggles";
        case 'apply':
          return "Supporting Homework in a Multilingual Home";
        case 'reflect':
          return "Balancing Work and School Support";
        case 'bridge':
          return "Connecting with Other Expat Parents";
        default:
          return `${title} for Expat Parents in Maastricht`;
      }
    }
    
    // Default scenario label generation based on section and title
    return `${title} in Real-Life Situations`;
  },
  
  // Helper: Generate scenario use description
  _generateScenarioUse: function(section, content, clusterInfo) {
    // Example for parents of young children in Maastricht
    if (clusterInfo.location === 'Maastricht' && 
        clusterInfo.profileData && 
        clusterInfo.profileData.hasChildren && 
        clusterInfo.profileData.childrenAgeRange === '0-5') {
      
      switch(section) {
        case 'discover':
          return "Improve your ability to break down school instructions, so you can support your child without frustration.";
        case 'learn':
          return "Understand the Dutch education approach and expectations to better support your child's learning journey.";
        case 'practice':
          return "Learn how to guide and coach your child through conversations, while picking up Dutch/English school-related terms yourself.";
        case 'apply':
          return "Develop strategies for helping with homework when you're still learning the language yourself.";
        case 'reflect':
          return "Find balance between your work responsibilities and supporting your child's education in a new country.";
        case 'bridge':
          return "Connect with other expat parents facing similar challenges and share solutions.";
        default:
          return `Apply ${section} skills to support your child's education in an international context.`;
      }
    }
    
    // Default use description
    return `Apply what you've learned about ${content.substring(0, 30)}... to solve real-world problems.`;
  },
  
  // Helper: Calculate relevance score for a scenario based on cluster match
  _calculateRelevance: function(clusterInfo) {
    // Simple relevance calculation - can be enhanced with more sophisticated algorithms
    let relevance = 50; // Base relevance
    
    // Increase relevance based on specific cluster attributes
    if (clusterInfo.location) relevance += 10;
    if (clusterInfo.professionalBackground) relevance += 10;
    if (clusterInfo.psychologicalNeeds) relevance += 10;
    if (clusterInfo.socialNeeds) relevance += 10;
    if (clusterInfo.culturalContext) relevance += 10;
    if (clusterInfo.currentChallenges) relevance += 10;
    if (clusterInfo.profileData) relevance += 10;
    
    return Math.min(relevance, 100); // Cap at 100
  },
  
  // Helper: Filter scenarios by cluster match
  _filterScenariosByCluster: function(allScenarios, clusterInfo) {
    const matchingScenarios = [];
    
    Object.values(allScenarios).forEach(scenarioSet => {
      // Calculate match score between scenario cluster and target cluster
      const matchScore = this._calculateClusterMatchScore(scenarioSet.clusterInfo, clusterInfo);
      
      // If match score is above threshold, include in results
      if (matchScore > 60) {
        matchingScenarios.push({
          ...scenarioSet,
          matchScore: matchScore
        });
      }
    });
    
    // Sort by match score
    return matchingScenarios.sort((a, b) => b.matchScore - a.matchScore);
  },
  
  // Helper: Calculate match score between two cluster profiles
  _calculateClusterMatchScore: function(clusterA, clusterB) {
    let matchPoints = 0;
    let totalPoints = 0;
    
    // Compare location
    if (clusterA.location && clusterB.location) {
      totalPoints += 10;
      if (clusterA.location === clusterB.location) {
        matchPoints += 10;
      }
    }
    
    // Compare professional background
    if (clusterA.professionalBackground && clusterB.professionalBackground) {
      totalPoints += 10;
      if (clusterA.professionalBackground.isEmployed === clusterB.professionalBackground.isEmployed) {
        matchPoints += 5;
      }
      if (clusterA.professionalBackground.sector === clusterB.professionalBackground.sector) {
        matchPoints += 5;
      }
    }
    
    // Compare psychological needs
    if (clusterA.psychologicalNeeds && clusterB.psychologicalNeeds) {
      totalPoints += 10;
      if (clusterA.psychologicalNeeds.personalGrowth === clusterB.psychologicalNeeds.personalGrowth) {
        matchPoints += 5;
      }
      if (clusterA.psychologicalNeeds.stressManagement === clusterB.psychologicalNeeds.stressManagement) {
        matchPoints += 5;
      }
    }
    
    // Compare social needs
    if (clusterA.socialNeeds && clusterB.socialNeeds) {
      totalPoints += 10;
      if (clusterA.socialNeeds.improveCommunication === clusterB.socialNeeds.improveCommunication) {
        matchPoints += 5;
      }
      if (clusterA.socialNeeds.buildNetwork === clusterB.socialNeeds.buildNetwork) {
        matchPoints += 5;
      }
    }
    
    // Compare cultural context
    if (clusterA.culturalContext && clusterB.culturalContext) {
      totalPoints += 10;
      if (clusterA.culturalContext.isExpat === clusterB.culturalContext.isExpat) {
        matchPoints += 5;
      }
      if (clusterA.culturalContext.originCountry === clusterB.culturalContext.originCountry) {
        matchPoints += 5;
      }
    }
    
    // Compare profile data (children)
    if (clusterA.profileData && clusterB.profileData) {
      totalPoints += 10;
      if (clusterA.profileData.hasChildren === clusterB.profileData.hasChildren) {
        matchPoints += 5;
      }
      if (clusterA.profileData.childrenAgeRange === clusterB.profileData.childrenAgeRange) {
        matchPoints += 5;
      }
    }
    
    // Calculate percentage match
    return totalPoints > 0 ? (matchPoints / totalPoints) * 100 : 0;
  }
};

export default scenarioGenerationAgent;
