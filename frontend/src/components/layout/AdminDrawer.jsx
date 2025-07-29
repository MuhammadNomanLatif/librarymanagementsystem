import React from "react";
import {
  Box,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

const AdminDrawer = ({
  drawerWidth,
  mobileOpen,
  onToggleDrawer,
  menuItems,
}) => {
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
            <ListItemButton onClick={item.action}>
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
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onToggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
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
  );
};

export default AdminDrawer;
