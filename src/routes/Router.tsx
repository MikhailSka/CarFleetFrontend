import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import RegisterPage from 'pages/RegisterPage'
import LoginPage from 'pages/LoginPage'
import TripsPage from 'pages/TripsPage'
import CarsPage from 'pages/CarsPage'
import StatisticsPage from 'pages/StatisticsPage'
import MaintenancePage from 'pages/MaintenancePage'
import UnauthorizedPage from 'pages/UnauthorizedPage'
import NotFound from 'pages/NotFound'
import { ProtectedRoute } from './ProtectedRoute'

function AppRouter(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute roles={[]} element={<HomePage />} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/data/trips"
          element={
            <ProtectedRoute roles={['admin', 'user']} element={<TripsPage />} />
          }
        />
        <Route
          path="/data/cars"
          element={
            <ProtectedRoute roles={['admin', 'user']} element={<CarsPage />} />
          }
        />
        <Route
          path="/data/statistics"
          element={
            <ProtectedRoute
              roles={['admin', 'user']}
              element={<StatisticsPage />}
            />
          }
        />
        <Route
          path="/data/maintenance"
          element={
            <ProtectedRoute
              roles={['admin', 'user']}
              element={<MaintenancePage />}
            />
          }
        />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
