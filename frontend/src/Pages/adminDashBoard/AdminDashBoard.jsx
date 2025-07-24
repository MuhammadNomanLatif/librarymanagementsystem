import React, { useState } from "react";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AddToPhotosOutlinedIcon from "@mui/icons-material/AddToPhotosOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Tooltip from "@mui/material/Tooltip";
import {
  AppBar,
  Grid,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import CardSample from "../../components/CardSample";
import BookInformationForm from "../../New Components used for later/BookInformationForm";
import VisitorsChart from "../../New Components used for later/VisitorsChart";
import BooksAllocationChart from "../../New Components used for later/BooksAllocationChart";
import BookAvailabilityChart from "../../New Components used for later/BookAvailabilityChart";
const menuItems = [
  { text: "Dashboard", icon: <GridViewOutlinedIcon /> },
  { text: "Resources", icon: <SpaceDashboardOutlinedIcon /> },
  { text: "Manage Books", icon: <ManageHistoryOutlinedIcon /> },
  { text: "Reports", icon: <AssessmentOutlinedIcon /> },
  { text: "Landed Books", icon: <AddToPhotosOutlinedIcon /> },
  { text: "Members", icon: <CardMembershipOutlinedIcon /> },
  { text: "Setting", icon: <SettingsOutlinedIcon /> },
  { text: "Notifications", icon: <NotificationsOutlinedIcon /> },
  { text: "Logout", icon: <ExitToAppOutlinedIcon /> },
];
const drawerWidth = 200;

const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNestedClick = () => {
    setNestedOpen(!nestedOpen);
  };

  const handleThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const drawerContent = (
    <Box sx={{ width: drawerWidth }}>
      <Grid
        sx={{
          marginTop: "10px",
          marginLeft: "15px",
          display: "flex",
          justifyContent: "flex-start",
          padding: "5px",
          fontWeight: "bold",
          fontFamily: "Inter, sans-serif",
          color: "#635BFF",
          gap: "8px",
          alignItems: "center",
          height: "40px",
          width: "150px",
          borderRadius: "5px",
          border: "1px solid #E3E7EA",
        }}
      >
        <LocalLibraryOutlinedIcon />
        Aspire LMS
      </Grid>
      <Toolbar />

      <List sx={{ marginTop: "-60px", padding: "0px" }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ marginRight: "-20px" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

        {/* AppBar */}
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
              onClick={toggleDrawer}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Tooltip title={mode === "dark" ? "Light Mode" : "Dark Mode"} arrow>
              <IconButton onClick={handleThemeToggle} color="inherit">
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications" arrow>
              {/* Notifications */}
              <IconButton color="inherit">
                <NotificationsOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Settings" arrow>
              {/* Settings */}
              <IconButton color="inherit">
                <SettingsOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout" arrow>
              {/* Logout */}
              <IconButton color="inherit">
                <ExitToAppOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        {/* Responsive Drawer */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {/* Mobile */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { width: drawerWidth },
            }}
          >
            {drawerContent}
          </Drawer>

          {/* Desktop */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginTop: "45px",
            backgroundColor: mode === "dark" ? "#121212" : "#f4f8fb",
            borderTopLeftRadius: "25px",
            height: "100vh",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            {/* Left: Welcome */}
            <Typography sx={{ color: mode === "dark" ? "#fff" : "#000" }}>
              Welcome Admin
            </Typography>

            {/* Right: Quick Actions + Button */}
            <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: mode === "dark" ? "#fff" : "#000" }}>
                Quick Actions:
              </Typography>
              <Button
                onClick={() => setShowAddBookForm(true)}
                variant="contained"
                sx={{
                  backgroundColor: "#673fc6",
                  "&:hover": { backgroundColor: "#5c2ec8" },
                }}
              >
                Add New Book
              </Button>
            </Grid>
          </Grid>
          {showAddBookForm === false ? (
            <Grid>
              <CardSample />
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <VisitorsChart />
                <BooksAllocationChart />
              </Grid>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <BookAvailabilityChart />
                <VisitorsChart />
              </Grid>
            </Grid>
          ) : (
            <BookInformationForm onCancel={setShowAddBookForm} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminDashboard;
