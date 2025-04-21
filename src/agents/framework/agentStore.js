// src/agents/framework/agentStore.js

// Simple state store for agents
const agentStore = {
  // Internal state
  _state: {},
  
  // Change listeners
  _listeners: {},
  
  // Initialize with default state
  init: function(defaultState = {}) {
    this._state = defaultState;
    console.log('Agent store initialized with default state');
  },
  
  // Get value from state
  get: function(path) {
    return this._getValueByPath(this._state, path);
  },
  
  // Update state
  update: function(path, value) {
    const oldValue = this.get(path);
    this._setValueByPath(this._state, path, value);
    
    // Notify listeners
    this._notifyListeners(path, value, oldValue);
  },
  
  // Listen for changes
  onChange: function(pathPattern, listener) {
    if (!this._listeners[pathPattern]) {
      this._listeners[pathPattern] = [];
    }
    
    this._listeners[pathPattern].push(listener);
    
    // Return unsubscribe function
    return () => {
      this._listeners[pathPattern] = 
        this._listeners[pathPattern].filter(l => l !== listener);
    };
  },
  
  // Helper: Get value by dot path
  _getValueByPath: function(obj, path) {
    const parts = path.split('.');
    let current = obj;
    
    for (const part of parts) {
      if (current === null || current === undefined) {
        return undefined;
      }
      
      current = current[part];
    }
    
    return current;
  },
  
  // Helper: Set value by dot path
  _setValueByPath: function(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      
      if (!(part in current)) {
        current[part] = {};
      }
      
      current = current[part];
    }
    
    current[parts[parts.length - 1]] = value;
  },
  
  // Helper: Notify relevant listeners
  _notifyListeners: function(path, newValue, oldValue) {
    Object.keys(this._listeners).forEach(pattern => {
      if (this._pathMatchesPattern(path, pattern)) {
        this._listeners[pattern].forEach(listener => {
          try {
            listener(path, newValue, oldValue);
          } catch (error) {
            console.error(`Error in state change listener for ${pattern}:`, error);
          }
        });
      }
    });
  },
  
  // Helper: Check if path matches pattern (supports * wildcard)
  _pathMatchesPattern: function(path, pattern) {
    const pathParts = path.split('.');
    const patternParts = pattern.split('.');
    
    if (pathParts.length < patternParts.length) {
      return false;
    }
    
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i] !== '*' && patternParts[i] !== pathParts[i]) {
        return false;
      }
    }
    
    return true;
  }
};

export default agentStore;
