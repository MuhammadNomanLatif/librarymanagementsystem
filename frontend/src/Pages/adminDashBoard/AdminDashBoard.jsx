import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../utils/axiosInstance";

// Components
import AdminAppBar from "../../components/layout/AdminAppBar";
import AdminDrawer from "../../components/layout/AdminDrawer";
import MainContent from "../../components/layout/MainContent";
import DashboardContent from "../../components/layout/DashboardContent";
import BookInformationForm from "../../New Components used for later/BookInformationForm";

// Hooks
import { useMenuItems } from "../../../hooks/useMenuItems";
import { useAppTheme } from "../../../hooks/useTheme";

const drawerWidth = 200;

const AdminDashboard = () => {
  const navigate = useNavigate();
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
          {showAddBookForm ? (
            <BookInformationForm onCancel={setShowAddBookForm} />
          ) : (
            <DashboardContent />
          )}
        </MainContent>
      </Box>
    </ThemeProvider>
  );
};

export default AdminDashboard;
