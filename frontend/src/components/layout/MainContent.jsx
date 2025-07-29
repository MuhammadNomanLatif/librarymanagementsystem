import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const MainContent = ({
  drawerWidth,
  mode,
  showAddBookForm,
  onShowAddBookForm,
  children,
}) => {
  const navigate = useNavigate();
  return (
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
            onClick={() => navigate("/admin/add-book")}
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

      {/* Dynamic Content */}
      {children}
    </Box>
  );
};

export default MainContent;
