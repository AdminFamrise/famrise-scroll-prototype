// src/agents/framework/agentHub.js

// Central communication hub for agents
const agentHub = {
  // Event listeners
  _listeners: {
    requests: {},
    commands: {},
    events: {}
  },
  
  // Request-Response pattern
  sendRequest: function(type, data) {
    return new Promise((resolve, reject) => {
      if (!this._listeners.requests[type]) {
        // If no handler, return empty success response to avoid breaking UI
        resolve({ success: true, data: null });
        return;
      }
      
      try {
        this._listeners.requests[type](data, resolve);
      } catch (error) {
        console.error(`Error in request handler for ${type}:`, error);
        reject(error);
      }
    });
  },
  
  onRequest: function(type, handler) {
    this._listeners.requests[type] = handler;
    return () => { delete this._listeners.requests[type]; }; // Return unregister function
  },
  
  // Command pattern
  executeCommand: function(command, data) {
    return new Promise((resolve, reject) => {
      if (!this._listeners.commands[command]) {
        reject(new Error(`No handler for command: ${command}`));
        return;
      }
      
      try {
        const result = this._listeners.commands[command](data);
        resolve(result);
      } catch (error) {
        console.error(`Error in command handler for ${command}:`, error);
        reject(error);
      }
    });
  },
  
  onCommand: function(command, handler) {
    this._listeners.commands[command] = handler;
    return () => { delete this._listeners.commands[command]; }; // Return unregister function
  },
  
  // Publish-Subscribe pattern
  publish: function(eventType, data) {
    if (!this._listeners.events[eventType]) {
      return; // No listeners
    }
    
    this._listeners.events[eventType].forEach(listener => {
      try {
        listener(data);
      } catch (error) {
        console.error(`Error in event listener for ${eventType}:`, error);
      }
    });
  },
  
  subscribe: function(eventType, listener) {
    if (!this._listeners.events[eventType]) {
      this._listeners.events[eventType] = [];
    }
    
    this._listeners.events[eventType].push(listener);
    
    // Return unsubscribe function
    return () => {
      this._listeners.events[eventType] = 
        this._listeners.events[eventType].filter(l => l !== listener);
    };
  }
};

export default agentHub;
