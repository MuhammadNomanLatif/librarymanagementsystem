import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const EditBook = () => {
  const { id } = useParams(); // ← This gives you the book ID
  console.log("Editing book ID:", id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    available: false,
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/getBookById/${id}`);
        setFormData(res.data.book);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load book", err);
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

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
      await api.put(`/book/${id}`, formData);
      alert("Book updated successfully!");
      navigate("/admin/dashboard"); // or wherever you list books
    } catch (err) {
      console.error(err);
      alert("Failed to update book");
    }
  };

  if (loading) return <Typography textAlign="center">Loading...</Typography>;

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, p: 4, m: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Edit Book
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
            Update Book
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default EditBook;
