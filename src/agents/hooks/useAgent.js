// src/agents/hooks/useAgent.js

import { useState, useCallback } from 'react';
import agentHub from '../framework/agentHub';

/**
 * Hook for executing agent commands
 * @param {string} commandName - The name of the command to execute
 * @returns {Object} - Object containing execute function, loading state, and error
 */
export function useAgentCommand(commandName) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await new Promise((resolve) => {
        agentHub.executeCommand(commandName, data, (response) => {
          resolve(response);
        });
      });
      
      setIsLoading(false);
      
      if (!result.success) {
        setError(new Error(result.error || 'Command execution failed'));
        return result;
      }
      
      return result;
    } catch (err) {
      setIsLoading(false);
      setError(err);
      throw err;
    }
  }, [commandName]);

  return { execute, isLoading, error };
}

/**
 * Hook for subscribing to agent events
 * @param {string} eventName - The name of the event to subscribe to
 * @param {Function} callback - The callback function to execute when the event is triggered
 */
export function useAgentEvent(eventName, callback) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  useCallback(() => {
    if (!isSubscribed) {
      agentHub.subscribe(eventName, callback);
      setIsSubscribed(true);
      
      return () => {
        agentHub.unsubscribe(eventName, callback);
        setIsSubscribed(false);
      };
    }
  }, [eventName, callback, isSubscribed]);
}

/**
 * Hook for making requests to agents
 * @param {string} requestName - The name of the request to make
 * @returns {Object} - Object containing request function, loading state, and error
 */
export function useAgentRequest(requestName) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await new Promise((resolve) => {
        agentHub.makeRequest(requestName, data, (response) => {
          resolve(response);
        });
      });
      
      setIsLoading(false);
      
      if (!result.success) {
        setError(new Error(result.error || 'Request failed'));
        return result;
      }
      
      return result;
    } catch (err) {
      setIsLoading(false);
      setError(err);
      throw err;
    }
  }, [requestName]);

  return { request, isLoading, error };
}

export default {
  useAgentCommand,
  useAgentEvent,
  useAgentRequest
};
