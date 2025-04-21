// src/agents/framework/initAgents.js

import agentStore from './agentStore';
import agentRegistry from './agentRegistry';

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
  learningPaths: {},
  sessions: {}
};

// Initialize the agent framework
function initAgents() {
  console.log('Initializing agent framework...');
  
  // Initialize state store with default state
  agentStore.init(defaultState);
  
  // Initialize agents
  // Note: Agent initializations will be added here as we implement each agent
  
  console.log('Agent framework initialized successfully');
}

export default initAgents;
