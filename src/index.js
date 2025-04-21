
import React from 'react'; import ReactDOM from 'react-dom/client';
import './index.css'; import App from './App' import initAgent from
' . /agents/
framework/initAgents';
// Initialize agent framework
initAgents ( );
const root =
ReactDOM. createRoot (document.getElemen tById ('root '));
root. render (
< React. StrictMode>
<App />
</React. StrictMode>
) ;...
