// src/agents/agents/contentStructuringAgent.js

import agentHub from '../framework/agentHub';
import agentStore from '../framework/agentStore';
import agentRegistry from '../framework/agentRegistry';

const contentStructuringAgent = {
  // Agent metadata
  id: 'contentStructuringAgent',
  name: 'Content Structuring Agent',
  description: 'Organizes content into the 5+1 step learning framework',
  
  // Initialize the agent
  init: function() {
    // Register with the registry
    agentRegistry.register(this.id, {
      name: this.name,
      description: this.description,
      capabilities: ['structureContent']
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
    agentHub.onCommand('structureContent', this._executeStructureContent.bind(this));
  },
  
  // Command handlers
  _executeStructureContent: function(data) {
    console.log(`Agent ${this.name} executing structureContent:`, data);
    
    if (!data.contentId || !data.rawContent) {
      return { 
        success: false, 
        error: 'Missing contentId or rawContent' 
      };
    }
    
    // Store the raw content
    agentStore.update(`content.raw.${data.contentId}`, data.rawContent);
    
    // Structure the content
    const structuredContent = this._structureContent(data.rawContent);
    
    // Store the structured content
    agentStore.update(`content.structured.${data.contentId}`, structuredContent);
    
    // Publish event
    agentHub.publish('contentStructured', {
      contentId: data.contentId,
      timestamp: Date.now()
    });
    
    return { 
      success: true, 
      contentId: data.contentId,
      content: structuredContent
    };
  },
  
  // Set up request handlers
  _setupRequestHandlers: function() {
    agentHub.onRequest('getStructuredContent', this._handleGetStructuredContent.bind(this));
  },
  
  // Request handlers
  _handleGetStructuredContent: function(data, respond) {
    console.log(`Agent ${this.name} handling getStructuredContent:`, data);
    
    if (!data.contentId) {
      respond({ 
        success: false, 
        error: 'Missing contentId' 
      });
      return;
    }
    
    const structuredContent = agentStore.get(`content.structured.${data.contentId}`);
    
    if (!structuredContent) {
      respond({ 
        success: false, 
        error: 'Structured content not found' 
      });
      return;
    }
    
    respond({ 
      success: true, 
      data: structuredContent 
    });
  },
  
  // Helper: Structure content using the 5+1 framework
  _structureContent: function(rawContent) {
    // Split content into paragraphs
    const paragraphs = rawContent.split('\n\n').filter(p => p.trim());
    
    // Simple rule-based structuring
    return {
      discover: {
        title: "Introduction to the Skill",
        content: paragraphs.slice(0, 1).join('\n\n') || "Introduction to the topic",
        examples: []
      },
      learn: {
        title: "Key Concepts",
        content: paragraphs.slice(1, 3).join('\n\n') || "Theoretical content about the skill",
        resources: []
      },
      practice: {
        title: "Practice Activities",
        content: paragraphs.slice(3, 4).join('\n\n') || "Exercises to practice the skill",
        exercises: []
      },
      apply: {
        title: "Real-World Application",
        content: paragraphs.slice(4, 5).join('\n\n') || "How to apply this skill in real life",
        projects: []
      },
      reflect: {
        title: "Reflection",
        content: paragraphs.slice(5, 6).join('\n\n') || "Questions to reflect on your learning",
        questions: []
      },
      bridge: {
        title: "Next Steps",
        content: paragraphs.slice(6).join('\n\n') || "Related skills to explore next",
        relatedSkills: []
      }
    };
  }
};

export default contentStructuringAgent;
