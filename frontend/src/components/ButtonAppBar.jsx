import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddBook from "./booksCrud/AddBook";
import api from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
export default function ButtonAppBar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await api.post("logout");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const goToAddBook = () => {
    navigate("/AddBook");
  };

  return (
    <Box className="headerSetting" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={handleLogout} color="inherit">
            LogOut
          </Button>
          <Button onClick={goToAddBook} color="inherit">
            Add Book
          </Button>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
