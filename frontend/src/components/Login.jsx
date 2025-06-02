import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosInstance";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate(); // 👈 get the navigation function
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", formData);
      setMessage(res.data.message || "Login successful");
      // ✅ Redirect to home after successful login
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            {message && (
              <Grid item xs={12}>
                <Typography color="primary">{message}</Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
