import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react';

const ProtectedRoute = () => {
  const { isSignedIn } = useAuth();
  const {user} = useUser();
  console.log(!isSignedIn)
  if (user === null) {
    
    return <Navigate to="/login" />;
  }


  return <Outlet />;
};

export default ProtectedRoute;
