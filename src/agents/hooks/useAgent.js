// src/agents/hooks/useAgent.js

import { useState, useEffect } from 'react';
import agentHub from '../framework/agentHub';

// Hook for making agent requests
export function useAgentRequest(requestType, params) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    setIsLoading(true);
    
    agentHub.sendRequest(requestType, params)
      .then(response => {
        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });
      
    return () => { isMounted = false; };
  }, [requestType, JSON.stringify(params)]);
  
  return [data, isLoading, error];
}

// Hook for executing agent commands
export function useAgentCommand(commandType) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const execute = async (params) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await agentHub.executeCommand(commandType, params);
      setIsLoading(false);
      return result;
    } catch (err) {
      setError(err);
      setIsLoading(false);
      throw err;
    }
  };
  
  return { execute, isLoading, error };
}

// Hook for subscribing to agent events
export function useAgentSubscription(eventType, initialData = null) {
  const [data, setData] = useState(initialData);
  
  useEffect(() => {
    const unsubscribe = agentHub.subscribe(eventType, (eventData) => {
      setData(eventData);
    });
    
    return unsubscribe;
  }, [eventType]);
  
  return data;
}
