import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  Paper,
  FormHelperText,
} from "@mui/material";
import api from "../utils/axiosInstance";
import toast from "react-hot-toast";
const BookInformationForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    authors: "",
    isbn: "",
    category: "",
    language: "",
    availableCopies: "",
    totalCopies: "",
    floor: "",
    shelfLocation: "",
    totalPages: "",
    status: "available",
    volume: "",
    bookFeatures: "",
    createdDate: "",
    publishedYear: "",
    moral: "",
  });

  const [errors, setErrors] = useState({
    bookTitle: false,
    authors: false,
    isbn: false,
    category: false,
    language: false,
    totalCopies: false,
    status: false,
    availableCopies: false,
    floor: false,
    shelfLocation: false,
    totalPages: false,
    status: false,
    volume: false,
    bookFeatures: false,
    createdDate: false,
    publishedYear: false,
    moral: false,
  });

  const requiredFields = [
    "bookTitle",
    "authors",
    "isbn",
    "category",
    "language",
    "totalCopies",
    "status",
    "availableCopies",
    "floor",
    "shelfLocation",
    "totalPages",
    "publishedYear",
    "createdDate",
    "moral",
    "volume",
    "bookFeatures",
  ];

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
        isValid = false;
      } else {
        newErrors[field] = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleCancelButton = () => {
    onCancel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await api.post("/addbook", formData, {
          withCredentials: true,
        });

        toast.success("Book added successfully!");
      } catch (err) {
        toast.error("Failed to add book. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  return (
    <Box borderRadius={1} border={1} borderColor="grey.300" pb={2}>
      <Paper
        elevation={3}
        sx={{ boxShadow: "none", p: 3, width: "100%", margin: "auto" }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Book Information
        </Typography>
        <hr />
        <Grid container columnSpacing={18} rowSpacing={2}>
          <Grid container spacing={3}>
            {/* Row 1 - Required Fields */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                name="bookTitle"
                label="Book title"
                variant="outlined"
                size="small"
                value={formData.bookTitle}
                onChange={handleChange}
                error={errors.bookTitle}
                helperText={errors.bookTitle && "Book title is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                name="authors"
                label="Authors"
                variant="outlined"
                size="small"
                value={formData.authors}
                onChange={handleChange}
                error={errors.authors}
                helperText={errors.authors && "Authors are required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                name="isbn"
                label="ISBN/ISSN"
                variant="outlined"
                size="small"
                value={formData.isbn}
                onChange={handleChange}
                error={errors.isbn}
                helperText={errors.isbn && "ISBN is required"}
              />
            </Grid>

            {/* Row 2 - Required Fields */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                name="category"
                label="Category"
                variant="outlined"
                size="small"
                value={formData.category}
                onChange={handleChange}
                error={errors.category}
                helperText={errors.category && "Category is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                name="language"
                label="Language"
                variant="outlined"
                size="small"
                value={formData.language}
                onChange={handleChange}
                error={errors.language}
                helperText={errors.language && "Language is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="availableCopies"
                label="Available Copies"
                variant="outlined"
                size="small"
                value={formData.availableCopies}
                onChange={handleChange}
                type="number"
                required
                error={errors.availableCopies}
                helperText={
                  errors.availableCopies && "Available Copies is required"
                }
              />
            </Grid>

            {/* Row 3 - Required Fields */}
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                name="totalCopies"
                label="Total Copies"
                variant="outlined"
                size="small"
                value={formData.totalCopies}
                onChange={handleChange}
                error={errors.totalCopies}
                helperText={errors.totalCopies && "Total copies is required"}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="floor"
                label="Floor"
                variant="outlined"
                size="small"
                value={formData.floor}
                onChange={handleChange}
                required
                error={errors.floor}
                helperText={errors.floor && "Floor is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="shelfLocation"
                label="Shelf/Location Code"
                variant="outlined"
                size="small"
                value={formData.shelfLocation}
                onChange={handleChange}
                required
                error={errors.shelfLocation}
                helperText={
                  errors.shelfLocation && "Shelf Location is required"
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="totalPages"
                label="Total no of Pages"
                variant="outlined"
                size="small"
                value={formData.totalPages}
                onChange={handleChange}
                type="number"
                required
                error={errors.totalPages}
                helperText={errors.totalPages && "Total Page is required"}
              />
            </Grid>

            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="subtitle1" sx={{ minWidth: "80px" }}>
                Status *
              </Typography>
              <RadioGroup
                row
                name="status"
                value={formData.status}
                onChange={handleChange}
                sx={{ display: "flex", gap: 1 }}
              >
                <FormControlLabel
                  value="available"
                  control={<Radio size="small" />}
                  label="Available"
                  sx={{ marginRight: 0 }}
                />
                <FormControlLabel
                  value="reserved"
                  control={<Radio size="small" />}
                  label="Reserved"
                  sx={{ marginRight: 0 }}
                />
                <FormControlLabel
                  value="outOfStock"
                  control={<Radio size="small" />}
                  label="Out of Stock"
                  sx={{ marginRight: 0 }}
                />
              </RadioGroup>
              {errors.status && (
                <FormHelperText error>Status is required</FormHelperText>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Features Information Section */}
        <Grid columnSpacing={18} rowSpacing={2} sx={{ mt: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Features Information
          </Typography>
          <hr />
          <Grid spacing={3} container>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="volume"
                label="Book Volume"
                variant="outlined"
                size="small"
                value={formData.volume}
                onChange={handleChange}
                required
                error={errors.volume}
                helperText={errors.volume && "Book Volume is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="bookFeatures"
                label="Book Features"
                variant="outlined"
                size="small"
                value={formData.bookFeatures}
                onChange={handleChange}
                required
                error={errors.bookFeatures}
                helperText={errors.bookFeatures && "Book Feature is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="createdDate"
                label="Created Date"
                variant="outlined"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.createdDate}
                onChange={handleChange}
                required
                error={errors.createdDate}
                helperText={errors.createdDate && "Create Date is required"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name="publishedYear"
                label="Published Year"
                variant="outlined"
                size="small"
                value={formData.publishedYear}
                onChange={handleChange}
                type="number"
                required
                error={errors.publishedYear}
                helperText={errors.publishedYear && "Publish Year is required"}
              />
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} item xs={4}>
            <TextField
              fullWidth
              name="moral"
              label="Moral of the Book"
              variant="outlined"
              size="small"
              value={formData.moral}
              onChange={handleChange}
              multiline
              rows={3}
              required
              error={errors.moral}
              helperText={errors.moral && "Book Moral is required"}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "10px",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#673fc6",
            "&:hover": { backgroundColor: "#fefef9ff" },
          }}
          onClick={handleCancelButton}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#673fc6",
            "&:hover": { backgroundColor: "#5c2ec8" },
          }}
          onClick={handleSubmit}
        >
          Add Book
        </Button>
      </Grid>
    </Box>
  );
};

export default BookInformationForm;
