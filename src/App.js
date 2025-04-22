import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// General Pages
import LandingPage from "./pages/index";
import ProfileCreation from "./pages/profile";
import EverydayScenarioPage from "./pages/scenario/everyday";
import OpportunitiesScenarioPage from "./pages/scenario/opportunities";
import WellbeingCheck from "./pages/wellbeing-check";
import OpportunityOverview from "./pages/overview";
import Dashboard from "./pages/dashboard";
import AddSkill from "./pages/admin/AddSkill";

// Skill Journey Pages (dynamic)
import SkillLanding from "./pages/skills/SkillLanding";
import Discover from "./pages/skills/Discover";
import Learn from "./pages/skills/Learn";
import Practice from "./pages/skills/Practice";
import Apply from "./pages/skills/Apply";
import Reflect from "./pages/skills/Reflect";
import BridgeModule from "./pages/skills/BridgeModule";

// Admin Components
import AdminLayout from "./features/admin/layout/AdminLayout";
import ScenarioGenerator from "./features/scenarios/ScenarioGenerator";
import EnhancedScenarioGenerationTool from "./components/admin/EnhancedScenarioGenerationTool";


// Simple Admin Navigation component
const AdminNav = () => {
  const navStyle = {
    display: 'flex',
    backgroundColor: '#4299e1',
    padding: '12px',
    marginBottom: '20px'
  };
  
  const linkStyle = {
    color: 'white',
    padding: '8px 16px',
    textDecoration: 'none',
    fontWeight: '500',
    marginRight: '12px'
  };
  
  return (
    <div style={navStyle}>
      <a href="/" style={linkStyle}>Home</a>
      <a href="/admin/add-skill" style={linkStyle}>Add Skill</a>
      <a href="/admin/scenarios" style={linkStyle}>Scenario Tool</a>
      <a href="/admin/compact-scenarios" style={linkStyle}>Compact Scenarios</a>
    </div>
  );
};

// Admin page wrapper component
const AdminPage = ({ children }) => {
  const containerStyle = {
    padding: '20px'
  };
  
  return (
    <div>
      <AdminNav />
      <div style={containerStyle}>
        {children}
      </div>
    </div>
  );
};

// Loading fallback component
const Loading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          {/* Admin Dashboard as Home */}
          <Route path="/" element={
            <AdminPage>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Admin Dashboard</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                  <a href="/admin/add-skill" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'block',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Add Skill</h2>
                    <p>Create and manage skills in the platform</p>
                  </a>
                  <a href="/admin/scenarios" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'block',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Scenario Tool</h2>
                    <p>Generate scenarios for different customer clusters</p>
                  </a>
                  <a href="/admin/compact-scenarios" style={{ 
                    textDecoration: 'none', 
                    color: 'inherit',
                    display: 'block',
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Compact Scenarios</h2>
                    <p>Generate 5-step learning scenarios (compact version)</p>
                  </a>
                </div>
              </div>
            </AdminPage>
          } />

          {/* Admin Tools */}
          <Route path="/admin/add-skill" element={
            <AdminPage>
              <AddSkill />
            </AdminPage>
          } />
          
          <Route path="/admin/scenarios" element={
            <AdminPage>
              <ScenarioGenerator />
            </AdminPage>
          } />
          
          <Route path="/admin/compact-scenarios" element={
            <AdminPage>
              <EnhancedScenarioGenerationTool />
            </AdminPage>
          } />

          {/* General Flow */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="/scenario/everyday" element={<EverydayScenarioPage />} />
          <Route path="/scenario/opportunities" element={<OpportunitiesScenarioPage />} />
          <Route path="/wellbeing-check" element={<WellbeingCheck />} />
          <Route path="/overview" element={<OpportunityOverview />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Skill Journey (Dynamic slug) */}
          <Route path="/skills/:skillSlug" element={<SkillLanding />} />
          <Route path="/skills/:skillSlug/discover" element={<Discover />} />
          <Route path="/skills/:skillSlug/learn" element={<Learn />} />
          <Route path="/skills/:skillSlug/practice" element={<Practice />} />
          <Route path="/skills/:skillSlug/apply" element={<Apply />} />
          <Route path="/skills/:skillSlug/reflect" element={<Reflect />} />
          <Route path="/skills/:skillSlug/bridge" element={<BridgeModule />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;


