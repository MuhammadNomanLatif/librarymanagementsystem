import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import api from "../utils/axiosInstance"; // baseURL should point to /api or /api/v1

const BookManager = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({ title: "", author: "", isbn: "" });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  // Get all books (optional, assuming you have GET /books)
  const fetchBooks = async () => {
    try {
      const res = await api.get("/books"); // You must have a GET endpoint
      setBooks(res.data.books || res.data); // Adjust as per your backend response
    } catch (err) {
      setMessage("Failed to fetch books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await api.put(`/books/${editingId}`, formData);
        setMessage(res.data.message);
      } else {
        const res = await api.post("/books", formData);
        setMessage(res.data.message);
      }
      setFormData({ title: "", author: "", isbn: "" });
      setEditingId(null);
      fetchBooks();
    } catch (err) {
      setMessage(err.response?.data?.message || "Action failed");
    }
  };

  const handleEdit = (book) => {
    setFormData({ title: book.title, author: book.author, isbn: book.isbn });
    setEditingId(book._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/books/${id}`);
      setMessage(res.data.message);
      fetchBooks();
    } catch (err) {
      setMessage("Delete failed");
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {editingId ? "Edit Book" : "Add New Book"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="ISBN"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                {editingId ? "Update Book" : "Add Book"}
              </Button>
            </Grid>
          </Grid>
        </Box>

        {message && (
          <Typography color="primary" gutterBottom>
            {message}
          </Typography>
        )}

        <Typography variant="h6" gutterBottom>
          Book List
        </Typography>
        {books.length === 0 ? (
          <Typography>No books found</Typography>
        ) : (
          books.map((book) => (
            <Paper key={book._id} sx={{ p: 2, mt: 2 }}>
              <Typography>
                <strong>{book.title}</strong> by {book.author} (ISBN:{" "}
                {book.isbn})
              </Typography>
              <Box mt={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => handleEdit(book)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </Button>
              </Box>
            </Paper>
          ))
        )}
      </Paper>
    </Container>
  );
};

export default BookManager;
