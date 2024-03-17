import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import TripsPage from "pages/TripsPage";
import CarsPage from "pages/CarsPage";
import StatisticsPage from "pages/StatisticsPage";
import MaintenancePage from "pages/MaintenancePage";
import UnauthorizedPage from "pages/UnauthorizedPage";
import NotFound from "pages/NotFound";

import { ProtectedRoute } from "./ProtectedRoute";

export function AppRouter(): React.ReactNode {
  return (
    <Router>
      <Routes>
      <ProtectedRoute path="/" roles={[]} element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <ProtectedRoute path="/data/trips" roles={["admin", "user"]} element={<TripsPage />} />
        <ProtectedRoute path="/data/cars" roles={["admin", "user"]} element={<CarsPage />} />
        <ProtectedRoute path="/data/statistics" roles={["admin", "user"]} element={<StatisticsPage />} />
        <ProtectedRoute path="/data/maintenance" roles={["admin", "user"]} element={<MaintenancePage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
