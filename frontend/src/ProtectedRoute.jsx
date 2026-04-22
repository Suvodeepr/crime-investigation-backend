// this component protects routes based on login and role

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

  // get token and role from local storage
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // if not logged in → redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // if role does not match → block access
  if (userRole !== role) {
    return <h2>Access Denied</h2>;
  }

  // if everything is correct → show page
  return children;
}

export default ProtectedRoute;