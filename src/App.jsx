import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';
import './App.css';

// Lazy loading pages to drastically reduce initial bundle size and speed up page load
const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const RoofingPage = React.lazy(() => import('./pages/RoofingPage'));
const RoofInspectionPage = React.lazy(() => import('./pages/RoofInspectionPage'));
const RoofRepairPage = React.lazy(() => import('./pages/RoofRepairPage'));
const RoofReplacementPage = React.lazy(() => import('./pages/RoofReplacementPage'));
const StormRestorationPage = React.lazy(() => import('./pages/StormRestorationPage'));
const ThankYouPage = React.lazy(() => import('./pages/ThankYouPage'));
const FinancingPage = React.lazy(() => import('./pages/FinancingPage'));
const CommercialRoofingPage = React.lazy(() => import('./pages/CommercialRoofingPage'));
const SolarPanelPage = React.lazy(() => import('./pages/SolarPanelPage'));
const InsuranceClaimPage = React.lazy(() => import('./pages/InsuranceClaimPage'));

// Dashboard lazy imports
const Overview = React.lazy(() => import('./pages/dashboard/Overview'));
const Leads = React.lazy(() => import('./pages/dashboard/Leads'));
const Projects = React.lazy(() => import('./pages/dashboard/Projects'));
const Estimates = React.lazy(() => import('./pages/dashboard/Estimates'));
const ComingSoon = React.lazy(() => import('./components/common/ComingSoon'));

// Fallback loader while downloading chunks
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', background: 'transparent' }}>
    <div className="loader" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #016CD6', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Website Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/roofing" element={<RoofingPage />} />

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
    </Suspense>
  );
}

export default App;
