// src/components/PrivateRoute.jsx
// Wraps any route that requires authentication.
// Usage: <PrivateRoute><ProfilePage /></PrivateRoute>

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;