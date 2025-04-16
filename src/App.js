import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Main Pages
import LandingPage from "./pages/index";
import ProfileCreation from "./pages/profile";
import ScenarioFollowUp from "./pages/scenario";
import WellBeingCheck from "./pages/wellbeing-check";
import OpportunityOverview from "./pages/overview";
import CustomerDashboard from "./pages/dashboard";

// Skill Journey Pages (generic structure — uses communication-reasoning as current placeholder)
import SkillLanding from "./pages/skills/communication-reasoning/index";
import Discover from "./pages/skills/communication-reasoning/Discover";
import Learn from "./pages/skills/communication-reasoning/Learn";
import Practice from "./pages/skills/communication-reasoning/Practice";
import Apply from "./pages/skills/communication-reasoning/Apply";
import Reflect from "./pages/skills/communication-reasoning/Reflect";
import BridgeModule from "./pages/skills/communication-reasoning/BridgeModule";

function App() {
  return (
    <Router>
      <Routes>
        {/* 💡 General Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/scenario" element={<ScenarioFollowUp />} />
        <Route path="/wellbeing-check" element={<WellBeingCheck />} />
        <Route path="/overview" element={<OpportunityOverview />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />

        {/* 🧩 Skill Journey (placeholder: Communication & Reasoning) */}
        <Route path="/skills/communication-reasoning" element={<SkillLanding />} />
        <Route path="/skills/communication-reasoning/discover" element={<Discover />} />
        <Route path="/skills/communication-reasoning/learn" element={<Learn />} />
        <Route path="/skills/communication-reasoning/practice" element={<Practice />} />
        <Route path="/skills/communication-reasoning/apply" element={<Apply />} />
        <Route path="/skills/communication-reasoning/reflect" element={<Reflect />} />
        <Route path="/skills/communication-reasoning/bridge" element={<BridgeModule />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
