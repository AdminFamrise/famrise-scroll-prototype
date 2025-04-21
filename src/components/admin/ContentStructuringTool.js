// src/components/admin/ContentStructuringTool.js

import React, { useState } from 'react';
import { useAgentCommand } from '../../agents/hooks/useAgent';

function ContentStructuringTool() {
  const [rawContent, setRawContent] = useState('');
  const [structuredContent, setStructuredContent] = useState(null);
  const { execute, isLoading, error } = useAgentCommand('structureContent');
  
  const handleStructureContent = async () => {
    try {
      const result = await execute({
        contentId: `content-${Date.now()}`,
        rawContent: rawContent
      });
      
      if (result.success) {
        setStructuredContent(result.content);
      }
    } catch (err) {
      console.error('Error structuring content:', err);
    }
  };
  
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Content Structuring Tool</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Raw Content
        </label>
        <textarea
          className="w-full p-2 border rounded min-h-[200px]"
          value={rawContent}
          onChange={(e) => setRawContent(e.target.value)}
          placeholder="Paste your raw content here..."
        />
      </div>
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
        onClick={handleStructureContent}
        disabled={isLoading || !rawContent.trim()}
      >
        {isLoading ? 'Processing...' : 'Structure Content'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error.message}
        </div>
      )}
      
      {structuredContent && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Structured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(structuredContent).map(([section, data]) => (
              <div key={section} className="border rounded p-4">
                <h3 className="font-bold text-lg capitalize">{section}</h3>
                <h4 className="font-medium">{data.title}</h4>
                <p className="mt-2 text-sm">{data.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentStructuringTool;

