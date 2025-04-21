// src/agents/framework/agentRegistry.js

// Registry for available agents
const agentRegistry = {
  // Registered agents
  _agents: {},
  
  // Register an agent
  register: function(agentId, metadata) {
    this._agents[agentId] = {
      ...metadata,
      id: agentId,
      status: 'registered'
    };
    
    console.log(`Agent registered: ${agentId}`);
  },
  
  // Get agent information
  getAgent: function(agentId) {
    return this._agents[agentId];
  },
  
  // Get all registered agents
  getAllAgents: function() {
    return Object.values(this._agents);
  },
  
  // Update agent status
  updateStatus: function(agentId, status) {
    if (this._agents[agentId]) {
      this._agents[agentId].status = status;
    }
  }
};

export default agentRegistry;
