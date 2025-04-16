import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// General Pages
import LandingPage from "./pages/index";
import ProfileCreation from "./pages/profile";
import ScenarioSelection from "./pages/scenario";
import WellbeingCheck from "./pages/wellbeing-check";
import OpportunityOverview from "./pages/overview";
import Dashboard from "./pages/dashboard";

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
        {/* General Flow */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/scenario" element={<ScenarioSelection />} />
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
    </Router>
  );
}

export default App;

