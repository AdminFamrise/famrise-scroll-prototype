import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import initAgent from './agents/framework/initAgent';

// Initialize agent framework
initAgent();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
