import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../utils/axiosInstance";

// Components
import AdminAppBar from "../../components/layout/AdminAppBar";
import AdminDrawer from "../../components/layout/AdminDrawer";
import MainContent from "../../components/layout/MainContent";
import DashboardContent from "../../components/layout/DashboardContent";
import BookInformationForm from "../../New Components used for later/BookInformationForm";
import BookSearchTable from "../../components/BookSearchTable";

// Hooks
import { useMenuItems } from "../../../hooks/useMenuItems";
import { useAppTheme } from "../../../hooks/useTheme";

const drawerWidth = 200;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  // Custom hooks
  const { theme, mode, handleThemeToggle } = useAppTheme();

  const handleLogout = async () => {
    try {
      await api.post("/logout");
      navigate("/");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  const menuItems = useMenuItems(handleLogout);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to render content based on current path
  const renderContent = () => {
    console.log("Current Path:", location.pathname);
    switch (location.pathname) {
      case "/admin/manage-books":
        return <BookSearchTable />;
      case "/admin/add-book":
        return (
          <BookInformationForm onCancel={() => navigate("/admin/dashboard")} />
        );
      case "/admin/dashboard":
      default:
        return <DashboardContent />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: mode === "dark" ? "#121212" : "#f4f8fb",
          height: "100vh",
        }}
      >
        <CssBaseline />

        {/* AppBar Component */}
        <AdminAppBar
          drawerWidth={drawerWidth}
          mode={mode}
          onToggleDrawer={toggleDrawer}
          onThemeToggle={handleThemeToggle}
          onLogout={handleLogout}
        />

        {/* Drawer Component */}
        <AdminDrawer
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          onToggleDrawer={toggleDrawer}
          menuItems={menuItems}
        />

        {/* Main Content Component */}
        <MainContent
          drawerWidth={drawerWidth}
          mode={mode}
          showAddBookForm={showAddBookForm}
          onShowAddBookForm={setShowAddBookForm}
        >
          {renderContent()}
        </MainContent>
      </Box>
    </ThemeProvider>
  );
};

export default AdminDashboard;
