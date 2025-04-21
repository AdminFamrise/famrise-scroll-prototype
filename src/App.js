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
// src/agents/agents/contentStructuringAgent.js

import agentHub from '../framework/agentHub';
import agentStore from '../framework/agentStore';
import agentRegistry from '../framework/agentRegistry';
import ContentStructuringTool from './components/admin/ContentStructuringTool';


// Skill Journey Pages (dynamic)
import SkillLanding from "./pages/skills/SkillLanding";
import Discover from "./pages/skills/Discover";
import Learn from "./pages/skills/Learn";
import Practice from "./pages/skills/Practice";
import Apply from "./pages/skills/Apply";
import Reflect from "./pages/skills/Reflect";
import BridgeModule from "./pages/skills/BridgeModule";

function App() {
  return (
    <Router>
      <Routes>
        {/* TEMP: Default to Admin AddSkill page */}
        <Route path="/" element={<AddSkill />} />

        {/* General Flow */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/scenario/everyday" element={<EverydayScenarioPage />} />
        <Route path="/scenario/opportunities" element={<OpportunitiesScenarioPage />} />
        <Route path="/wellbeing-check" element={<WellbeingCheck />} />
        <Route path="/overview" element={<OpportunityOverview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-skill" element={<AddSkill />} />
        <Route path="/admin/content-tool" element={<ContentStructuringTool />} />

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

