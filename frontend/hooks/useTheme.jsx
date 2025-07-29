import { useState } from "react";
import { createTheme } from "@mui/material";

export const useAppTheme = () => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const handleThemeToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return { theme, mode, handleThemeToggle };
};
