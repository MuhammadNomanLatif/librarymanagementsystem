import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, role }) => {
    console.log('called')
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RequireAuth;
