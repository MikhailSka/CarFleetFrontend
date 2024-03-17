import React from 'react';
import { Navigate, useLocation, Route } from 'react-router-dom';
import { IUser } from 'models/IUser';

interface ProtectedRouteProps {
  roles: string[];
  path: string;
  element: React.ReactNode;
}

const checkUserRole = (user: IUser, requiredRoles: string[]): boolean => {
  return requiredRoles.some(role => user.roles.includes(role));
};

const currentUser: IUser = { roles: ['admin'] };

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles, path, element }) => {
  const location = useLocation();
  const isAuthorized = checkUserRole(currentUser, roles);

  return isAuthorized ? <Route path={path} element={element} /> : <Navigate to="/login" replace state={{ from: location }} />;
};
