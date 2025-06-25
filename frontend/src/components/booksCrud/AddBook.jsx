import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import api from "../../utils/axiosInstance";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    available: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const res = await api.post("/addbook", formData, {
        withCredentials: true,
      });
      alert("Book added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to add book");
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, p: 4, m: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Add Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          fullWidth
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="Author"
          name="author"
          fullWidth
          value={formData.author}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          label="ISBN"
          name="isbn"
          fullWidth
          value={formData.isbn}
          onChange={handleChange}
          margin="normal"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
          }
          label="Available"
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" fullWidth>
            Add Book
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AddBook;
