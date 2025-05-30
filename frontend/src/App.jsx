import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup"
import Login from "./components/Login";
import { Button, AppBar, Toolbar, Typography, Stack } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Library System
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Signup
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route
          path="/"
          element={
            <h2 style={{ padding: "2rem" }}>Welcome to the Library System</h2>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
