// src/agents/framework/initAgent.js

import agentStore from './agentStore';
import agentRegistry from './agentRegistry';
import contentStructuringAgent from '../agents/contentStructuringAgent';
import scenarioGenerationAgent from '../agents/scenarioGenerationAgent';

// Default state structure
const defaultState = {
  users: {
    current: {
      profile: {
        interests: ['communication', 'leadership', 'problem-solving']
      },
      progress: {},
      recommendations: {}
    }
  },
  content: {
    raw: {},
    structured: {}
  },
  scenarios: {},
  learningPaths: {},
  sessions: {}
};

// Initialize the agent framework
function initAgent() {
  console.log('Initializing agent framework...');
  
  // Initialize state store with default state
  agentStore.init(defaultState);
  
  // Initialize agents
  contentStructuringAgent.init();
  scenarioGenerationAgent.init();
  
  console.log('Agent framework initialized successfully');
}

export default initAgent;
