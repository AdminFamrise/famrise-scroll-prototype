import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// General Pages
import LandingPage from "./pages/index";
import ProfileCreation from "./pages/profile";
import EverydayScenarioPage from "./pages/scenario/everyday";
import OpportunitiesScenarioPage from "./pages/scenario/opportunities";
import WellbeingCheck from "./pages/wellbeing-check";
import OpportunityOverview from "./pages/overview";
import Dashboard from "./pages/dashboard";
import AddSkill from "./pages/admin/AddSkill";

// Agent imports
import agentHub from './agents/framework/agentHub';
import agentStore from './agents/framework/agentStore';
import agentRegistry from './agents/framework/agentRegistry';

// Agent UI Components
import ContentStructuringTool from './components/admin/ContentStructuringTool';
import StandaloneScenarioTool from './components/admin/StandaloneScenarioTool';

// Skill Journey Pages (dynamic)
import SkillLanding from "./pages/skills/SkillLanding";
import Discover from "./pages/skills/Discover";
import Learn from "./pages/skills/Learn";
import Practice from "./pages/skills/Practice";
import Apply from "./pages/skills/Apply";
import Reflect from "./pages/skills/Reflect";
import BridgeModule from "./pages/skills/BridgeModule";

// Admin Navigation Component
const AdminNav = () => (
  <div className="bg-gray-100 p-4 mb-6">
    <h2 className="text-xl font-bold mb-4">Admin Tools</h2>
    <div className="flex space-x-4">
      <Link to="/admin/add-skill" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Skill
      </Link>
      <Link to="/admin/content-tool" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Content Structuring Tool
      </Link>
      <Link to="/admin/scenario-tool" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
        Scenario Generation Tool
      </Link>
    </div>
  </div>
);

// Wrap admin pages with navigation
const AdminPageWrapper = ({ children }) => (
  <div className="container mx-auto px-4 py-8">
    <AdminNav />
    {children}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* TEMP: Default to Admin navigation page */}
        <Route path="/" element={
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Famrise Admin Dashboard</h1>
            <AdminNav />
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Welcome to Famrise Admin</h2>
              <p className="mb-4">Select a tool from the navigation above to get started.</p>
            </div>
          </div>
        } />
        
        {/* General Flow */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/scenario/everyday" element={<EverydayScenarioPage />} />
        <Route path="/scenario/opportunities" element={<OpportunitiesScenarioPage />} />
        <Route path="/wellbeing-check" element={<WellbeingCheck />} />
        <Route path="/overview" element={<OpportunityOverview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Admin Tools */}
        <Route path="/admin/add-skill" element={
          <AdminPageWrapper>
            <AddSkill />
          </AdminPageWrapper>
        } />
        <Route path="/admin/content-tool" element={
          <AdminPageWrapper>
            <ContentStructuringTool />
          </AdminPageWrapper>
        } />
<Route path="/admin/scenario-tool" element={<StandaloneScenarioTool />} />
          </AdminPageWrapper>
        } />
        
        {/* Skill Journey (Dynamic slug) */}
        <Route path="/skills/:skillSlug" element={<SkillLanding />} />
        <Route path="/skills/:skillSlug/discover" element={<Discover />} />
        <Route path="/skills/:skillSlug/learn" element={<Learn />} />
        <Route path="/skills/:skillSlug/practice" element={<Practice />} />
        <Route path="/skills/:skillSlug/apply" element={<Apply />} />
        <Route path="/skills/:skillSlug/reflect" element={<Reflect />} />
        <Route path="/skills/:skillSlug/bridge" element={<BridgeModule />} />
      </Routes>
    </Router>
  );
}

export default App;

