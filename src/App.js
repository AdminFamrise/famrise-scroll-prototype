import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Core components
import AddSkill from './components/AddSkill';
import SkillLanding from './pages/skills/SkillLanding';
import SkillJourneyMap from './pages/skills/SkillJourneyMap';
import Dashboard from './pages/dashboard';
import Overview from './pages/overview';
import Apply from './components/Apply';
import Reflect from './components/Reflect';
import BridgeModule from './components/BridgeModule';
import WellbeingCheck from './components/wellbeing-check';

// Admin components
import StandaloneScenarioTool from './components/admin/StandaloneScenarioTool';
import TestComponent from './components/admin/TestComponent';

// Admin Navigation Component
const AdminNav = () => (
  <div className="bg-gray-800 text-white p-4 mb-6">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="px-3 py-2 rounded hover:bg-gray-700">Home</Link>
          <Link to="/admin/add-skill" className="px-3 py-2 rounded hover:bg-gray-700">Add Skill</Link>
          <Link to="/admin/scenario-tool" className="px-3 py-2 rounded hover:bg-gray-700">Scenario Tool</Link>
          <Link to="/admin/test" className="px-3 py-2 rounded hover:bg-gray-700">Test Page</Link>
        </nav>
      </div>
    </div>
  </div>
);

// Admin Page Wrapper
const AdminPage = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <AdminNav />
    <div className="container mx-auto px-4 py-6">
      {children}
    </div>
  </div>
);

// Home Page Component
const HomePage = () => (
  <AdminPage>
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Lifelong Learning Platform Admin</h1>
      <p className="mb-6">Welcome to the admin dashboard. Select a tool from the navigation bar above.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Add Skill</h2>
          <p className="mb-4">Add new skills to the platform and organize them into categories.</p>
          <Link to="/admin/add-skill" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Add Skill
          </Link>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Scenario Generation</h2>
          <p className="mb-4">Create tailored scenarios for specific customer clusters.</p>
          <Link to="/admin/scenario-tool" className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Go to Scenario Tool
          </Link>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Test Page</h2>
          <p className="mb-4">Simple test page to verify routing functionality.</p>
          <Link to="/admin/test" className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
            Go to Test Page
          </Link>
        </div>
      </div>
    </div>
  </AdminPage>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* General Flow */}
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/wellbeing-check" element={<WellbeingCheck />} />
        
        {/* Admin Tools */}
        <Route path="/admin/add-skill" element={
          <AdminPage>
            <AddSkill />
          </AdminPage>
        } />
        <Route path="/admin/scenario-tool" element={
          <AdminPage>
            <StandaloneScenarioTool />
          </AdminPage>
        } />
        <Route path="/admin/test" element={
          <AdminPage>
            <TestComponent />
          </AdminPage>
        } />
        
        {/* Skill Journey */}
        <Route path="/skill-landing" element={<SkillLanding />} />
        <Route path="/skill-journey-map" element={<SkillJourneyMap />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/reflect" element={<Reflect />} />
        <Route path="/bridge" element={<BridgeModule />} />
      </Routes>
    </Router>
  );
}

export default App;


