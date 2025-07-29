import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  NotificationsOutlined,
  SettingsOutlined,
  ExitToAppOutlined,
} from "@mui/icons-material";

const AdminAppBar = ({
  drawerWidth,
  mode,
  onToggleDrawer,
  onThemeToggle,
  onLogout,
}) => {
  console.log("AdminAppBar rendered with mode:", mode);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: mode === "dark" ? "#121212" : "#fff",
        color: mode === "dark" ? "#fff" : "#000",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onToggleDrawer}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Tooltip title={mode === "dark" ? "Light Mode" : "Dark Mode"} arrow>
          <IconButton onClick={onThemeToggle} color="inherit">
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Notifications" arrow>
          <IconButton color="inherit">
            <NotificationsOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings" arrow>
          <IconButton color="inherit">
            <SettingsOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Logout" arrow>
          <IconButton onClick={onLogout} color="inherit">
            <ExitToAppOutlined />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default AdminAppBar;
