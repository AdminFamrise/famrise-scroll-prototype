import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/layout/MainLayout";

// Customer Journey Pages
import LandingPage from "./pages/index";
import ProfileCreation from "./pages/profile";
import EverydayScenarioPage from "./pages/scenario/everyday";
import OpportunitiesScenarioPage from "./pages/scenario/opportunities";
import WellbeingCheck from "./pages/wellbeing-check";
import OpportunityOverview from "./pages/overview";
import Dashboard from "./pages/dashboard";
import ExploreSkills from "./pages/explore";

// Skill Journey Pages
import SkillLanding from "./pages/skills/SkillLanding";
import Discover from "./pages/skills/Discover";
import Learn from "./pages/skills/Learn";
import Practice from "./pages/skills/Practice";
import Apply from "./pages/skills/Apply";
import Reflect from "./pages/skills/Reflect";
import BridgeModule from "./pages/skills/BridgeModule";

// Support Directory
import CoachDirectory from "./pages/support/CoachDirectory";

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
        <MainLayout>
          <Routes>
            {/* Landing + Profile */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfileCreation />} />

            {/* Scenario Selection */}
            <Route path="/scenario/everyday" element={<EverydayScenarioPage />} />
            <Route path="/scenario/opportunities" element={<OpportunitiesScenarioPage />} />

            {/* Wellbeing & Overview */}
            <Route path="/wellbeing-check" element={<WellbeingCheck />} />
            <Route path="/overview" element={<OpportunityOverview />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Explore */}
            <Route path="/explore" element={<ExploreSkills />} />

            {/* Skill Journey */}
            <Route path="/skills/:skillSlug" element={<SkillLanding />} />
            <Route path="/skills/:skillSlug/discover" element={<Discover />} />
            <Route path="/skills/:skillSlug/learn" element={<Learn />} />
            <Route path="/skills/:skillSlug/practice" element={<Practice />} />
            <Route path="/skills/:skillSlug/apply" element={<Apply />} />
            <Route path="/skills/:skillSlug/reflect" element={<Reflect />} />
            <Route path="/skills/:skillSlug/bridge" element={<BridgeModule />} />

            {/* Support */}
            <Route path="/coach-directory" element={<CoachDirectory />} />
          </Routes>
        </MainLayout>
      </React.Suspense>
    </Router>
  );
}

export default App;


