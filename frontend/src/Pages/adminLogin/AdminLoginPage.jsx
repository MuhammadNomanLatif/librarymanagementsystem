import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import api from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const AdminLoginPage = () => {
  const is1920x1080 = useMediaQuery(
    "(min-width:1920px) and (max-width:1920px) and (min-height:1080px) and (max-height:1080px)"
  );
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateInputs = () => {
    let valid = true;

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
      const res = await api.post("/login", formData);
      const { user } = res.data;
      setMessage(res.data.message || "Login successful");
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Grid container sx={{ height: "100%" }}>
          {/* Left Side */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",

              width: is1920x1080 ? "50%" : "50%",
              backgroundImage: `url('https://media.istockphoto.com/id/1337098223/vector/literature-for-personal-development-concept.jpg?s=612x612&w=0&k=20&c=M6yitNlW59FvJe5gFiuwubWk6F64uu1h6NQ-X3E6U10=')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              p: 4,
              textAlign: { xs: "center", md: "left" },
              // Blue overlay
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(99, 91, 255, 0.9)", // translucent blue
                zIndex: 1,
              },

              // Ensure content stays on top
              "& > *": {
                zIndex: 2,
                position: "relative",
              },
            }}
          >
            <Typography variant="h4" gutterBottom>
              Manage Your Library with Ease.
            </Typography>
            <Typography variant="h4">
              Streamlined Solutions for Libraries
            </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  marginTop: "20px",
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
                size={6}
              >
                Efficient Book Management
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  marginTop: "20px",
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
                size={6}
              >
                User Management
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
                size={6}
              >
                Borrowing & Return
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
                size={6}
              >
                Analytics and Reports
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
                size={6}
              >
                Customized Notifications
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  border: "1px solid #fff",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
                size={6}
              >
                Shelf Management
              </Grid>
            </Grid>
          </Grid>

          {/* Right Side */}
          <Grid
            item
            xs={12}
            md={6}
            component={Paper}
            elevation={6}
            sx={{
              width: is1920x1080 ? "50%" : "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 400 }}>
              <Grid
                sx={{
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
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                Log Into Admin Aspire LMS
              </Typography>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  opacity: 0.5,
                  fontWeight: 600,
                  textAlign: "left",
                }}
              >
                admin login
              </Typography>
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="email"
                  name="email"
                  value={formData.email}
                  error={emailError}
                  placeholder="your@email.com"
                  helperText={emailErrorMessage}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••"
                  value={formData.password}
                  onChange={handleChange}
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 2,
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: "#635BFF",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminLoginPage;
