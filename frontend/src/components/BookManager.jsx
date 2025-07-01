import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  Paper,
  TableContainer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import api from "../utils/axiosInstance"; // baseURL should point to /api or /api/v1
import ButtonAppBar from "./ButtonAppBar";

const BookManager = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/books"); // or /api/books
        console.log(res);
        setBooks(res.data.books); // Adjust this based on your backend response
      } catch (err) {
        console.error("Failed to fetch books:", err);
      }
    };

    fetchBooks();
  }, []);
  const goToEditBook = (id) => {
    navigate(`/editbook/${id}`);
  };
  const handleDeleteClick = (id) => {
    setSelectedBookId(id);
    setOpenDialog(true);
  };
  const handleConfirmDelete = async () => {
    try {
      await api.delete(`/deletebook/${selectedBookId}`); // or your actual endpoint
      setOpenDialog(false);
      setSelectedBookId(null);

      // Optionally: refresh the book list
      // fetchBooks(); // or remove from state if managing locally
    } catch (error) {
      console.error("Error deleting book:", error);
      // Optionally show error toast/snackbar
    }
  };
  const handleCancel = () => {
    setOpenDialog(false);
    setSelectedBookId(null);
  };
  return (
    <>
      <ButtonAppBar />
      <TableContainer
        component={Paper}
        sx={{
          mt: 3,
          maxHeight: 500,
          overflow: "auto",
        }}
      >
        <Typography variant="h4" sx={{ p: 2, textAlign: "center" }}>
          Book List
        </Typography>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Title</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Author</strong>
              </TableCell>
              <TableCell align="center">
                <strong>ISBN</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book._id} hover>
                <TableCell align="center">{book.title}</TableCell>
                <TableCell align="center">{book.author}</TableCell>
                <TableCell align="center">{book.isbn}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => goToEditBook(book._id)}
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteClick(book._id)}
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this book?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookManager;
