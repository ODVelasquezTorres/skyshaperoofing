import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import RoofInspectionPage from './pages/RoofInspectionPage';
import RoofRepairPage from './pages/RoofRepairPage';
import RoofReplacementPage from './pages/RoofReplacementPage';
import StormRestorationPage from './pages/StormRestorationPage';
import ThankYouPage from './pages/ThankYouPage';
import FinancingPage from './pages/FinancingPage';
import CommercialRoofingPage from './pages/CommercialRoofingPage';
import SolarPanelPage from './pages/SolarPanelPage';
import InsuranceClaimPage from './pages/InsuranceClaimPage';
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import Overview from './pages/dashboard/Overview';
import Leads from './pages/dashboard/Leads';
import Projects from './pages/dashboard/Projects';
import Estimates from './pages/dashboard/Estimates';
import ComingSoon from './components/common/ComingSoon';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Public Website Routes */}
      {/* Public Website Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/roof-inspection" element={<RoofInspectionPage />} />
        <Route path="/roof-repair" element={<RoofRepairPage />} />
        <Route path="/roof-replacement" element={<RoofReplacementPage />} />
        <Route path="/storm-restoration" element={<StormRestorationPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/commercial-roofing" element={<CommercialRoofingPage />} />
        <Route path="/solar-panel" element={<SolarPanelPage />} />
        <Route path="/insurance-claim" element={<InsuranceClaimPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="leads" element={<Leads />} />
        <Route path="projects" element={<Projects />} />
        <Route path="estimates" element={<Estimates />} />

        {/* Placeholder Routes */}
        <Route path="clients" element={<ComingSoon title="Clients Management" />} />
        <Route path="calendar" element={<ComingSoon title="Calendar" />} />
        <Route path="invoices" element={<ComingSoon title="Invoices" />} />
        <Route path="team" element={<ComingSoon title="Team Management" />} />
        <Route path="settings" element={<ComingSoon title="Settings" />} />
      </Route>
    </Routes>
  );
}

export default App;
