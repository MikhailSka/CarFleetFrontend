import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { IUser } from 'models/IUser';

interface ProtectedRouteProps {
  roles: string[];
  element: React.ReactElement; 
}

const currentUser: IUser = { roles: ['admin'] }; 

const checkUserRole = (user: IUser, requiredRoles: string[]): boolean => {
  return requiredRoles.some(role => user.roles.includes(role));
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles, element }) => {
  const location = useLocation();
  const isAuthorized = checkUserRole(currentUser, roles);
  
  return isAuthorized ? element : <Navigate to="/login" replace state={{ from: location }} />;
};
