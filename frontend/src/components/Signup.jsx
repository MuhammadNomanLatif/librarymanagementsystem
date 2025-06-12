import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosInstance";
import {
  Button,
  Container,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  Card,
  Link,
} from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("error");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let valid = true;

    // Name validation
    if (!formData.name.trim()) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      valid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    // Password validation
    if (!formData.password || formData.password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const res = await api.post("/signup", formData);
      setMessage(res.data.message || "Signup successful");
      setMessageColor("primary");

      // Reset form
      setFormData({ name: "", email: "", password: "" });

      // Redirect to login after short delay
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
      setMessageColor("error");
    }
  };

  return (
    <Container maxWidth="sm">
      <Card variant="outlined" sx={{ padding: 4, marginTop: 4 }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", mb: 2 }}
        >
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <FormControl fullWidth margin="normal">
            <FormLabel>Name</FormLabel>
            <TextField
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              error={nameError}
              helperText={nameErrorMessage}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel>Email</FormLabel>
            <TextField
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              error={emailError}
              helperText={emailErrorMessage}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel>Password</FormLabel>
            <TextField
              name="password"
              type="password"
              placeholder="••••••"
              value={formData.password}
              onChange={handleChange}
              error={passwordError}
              helperText={passwordErrorMessage}
              required
            />
          </FormControl>

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>
        </form>

        <Typography sx={{ textAlign: "center", mt: 2 }}>
          Already have an account?{" "}
          <Link
            onClick={() => navigate("/login")}
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            Sign in
          </Link>
        </Typography>

        {message && (
          <Typography color={messageColor} sx={{ mt: 2, textAlign: "center" }}>
            {message}
          </Typography>
        )}
      </Card>
    </Container>
  );
};

export default Signup;
