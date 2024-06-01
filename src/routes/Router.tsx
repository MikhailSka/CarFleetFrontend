import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Header, Footer } from 'components/navigation';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import TripsPage from 'pages/TripsPage';
import CarsPage from 'pages/CarsPage';
import StatisticsPage from 'pages/StatisticsPage';
import MaintenancePage from 'pages/MaintenancePage';
import UnauthorizedPage from 'pages/errors/UnauthorizedPage';
import NotFound from 'pages/errors/NotFound';
import { ProtectedRoute } from './ProtectedRoute';

function AppRouter(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Layout route that includes Header and Footer */}
        <Route element={<LayoutWithHeaderAndFooter />}>
          <Route path="/" element={<ProtectedRoute roles={['admin', 'user']} element={<HomePage />} />} />
          <Route path="/trips" element={<ProtectedRoute roles={['admin', 'user']} element={<TripsPage />} />} />
          <Route path="/cars" element={<ProtectedRoute roles={['admin', 'user']} element={<CarsPage />} />} />
          <Route path="/statistics" element={<ProtectedRoute roles={['admin', 'user']} element={<StatisticsPage />} />} />
          <Route path="/data/maintenance" element={<ProtectedRoute roles={['admin', 'user']} element={<MaintenancePage />} />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Component to encapsulate the header and footer layout
function LayoutWithHeaderAndFooter() {
  return (
    <React.Fragment>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 120px)', marginTop: '60px' }}>
        <Outlet />  {/* This will render the matched child route component */}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default AppRouter;
