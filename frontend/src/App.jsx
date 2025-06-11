import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BookManager from "./components/BookManager";
import { Button, AppBar, Toolbar, Typography, Stack } from "@mui/material";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookManager />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
