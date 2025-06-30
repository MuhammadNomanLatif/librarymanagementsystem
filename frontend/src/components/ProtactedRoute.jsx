import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/axiosInstance"; // axios instance with `withCredentials: true`

const ProtectRoutes = () => {
  const [authState, setAuthState] = useState(false);
  const [loading, setLoading] = useState(true); // ⬅️ Add loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/checkauth");
        setAuthState(true);
      } catch (error) {
        setAuthState(false);
      } finally {
        setLoading(false); // ⬅️ Always stop loading
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>; // ⬅️ Prevent redirect while checking

  return authState ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectRoutes;
