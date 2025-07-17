import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  Typography,
  Box,
  IconButton,
  Checkbox,
  TextField,
  Button,
  Menu,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Search,
  Add,
  ArrowDropDown,
} from "@mui/icons-material";

const BookSearchTable = () => {
  // Sample data from your image
  const initialBooks = [
    {
      id: "ASP-BO-01",
      title: "The Great Catsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      language: "English",
      copies: 10,
      status: "Available",
    },
    {
      id: "ASP-BO-02",
      title: "To Kill a Mockingbird",
      author: "George Orwell",
      genre: "Ux-Ul Design Book",
      language: "English",
      copies: 5,
      status: "Available",
    },
    {
      id: "ASP-BO-03",
      title: "Pirates of the Caribbean",
      author: "Jane Austen",
      genre: "Non-Fiction",
      language: "Tamil",
      copies: 3,
      status: "Lended",
    },
    {
      id: "ASP-BO-04",
      title: "Pride and Prejudice",
      author: "J.D. Salinger",
      genre: "Romance",
      language: "English",
      copies: 2,
      status: "Available",
    },
    {
      id: "ASP-BO-05",
      title: "Sapiens: A Brief History",
      author: "Stephen Hawking",
      genre: "Ux-Ul Design Book",
      language: "English",
      copies: 1,
      status: "Damaged",
    },
    {
      id: "ASP-BO-06",
      title: "The Catcher in the Rye",
      author: "John Peter",
      genre: "Fiction",
      language: "English",
      copies: 5,
      status: "Damaged",
    },
    {
      id: "ASP-BO-07",
      title: "The Alchemist",
      author: "Sara Jones",
      genre: "Non-Fiction",
      language: "English",
      copies: 10,
      status: "Lended",
    },
    {
      id: "ASP-BO-08",
      title: "A Brief History of Time",
      author: "Will Turner",
      genre: "Science",
      language: "English",
      copies: 20,
      status: "Lended",
    },
    {
      id: "ASP-BO-09",
      title: "The Diary of a Young",
      author: "Dwayne Smith",
      genre: "Memoir",
      language: "English",
      copies: 30,
      status: "Lended",
    },
    {
      id: "ASP-BO-10",
      title: "Ux-Ul Design Book",
      author: "Anne Frank",
      genre: "Visual Design",
      language: "English",
      copies: 50,
      status: "Lended",
    },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Search functionality
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setBooks(initialBooks);
    } else {
      const filteredBooks = initialBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term) ||
          book.id.toLowerCase().includes(term) ||
          book.genre.toLowerCase().includes(term)
      );
      setBooks(filteredBooks);
    }
    setPage(0); // Reset to first page when searching
  };

  // Action menu handlers
  const handleActionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleActionClose = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = books.map((book) => book.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const sortedBooks = [...books].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "success.main"; // Green
      case "Damaged":
        return "error.main"; // Red
      case "Lended":
        return "warning.main"; // Yellow
      default:
        return "text.primary";
    }
  };

  // Action menu items
  const actionItems = [
    {
      label: "Export Selected",
      action: () => console.log("Export:", selected),
    },
    {
      label: "Delete Selected",
      action: () => console.log("Delete:", selected),
    },
    {
      label: "Mark as Available",
      action: () => console.log("Mark Available:", selected),
    },
    {
      label: "Mark as Damaged",
      action: () => console.log("Mark Damaged:", selected),
    },
  ];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{ width: 300 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => console.log("Add new book")}
          >
            Add Book
          </Button>

          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowDropDown />}
            onClick={handleActionClick}
            disabled={selected.length === 0}
          >
            Actions
          </Button>

          <Menu anchorEl={anchorEl} open={open} onClose={handleActionClose}>
            {actionItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  item.action();
                  handleActionClose();
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      <TableContainer>
        <Table stickyHeader aria-label="book search table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < books.length
                  }
                  checked={books.length > 0 && selected.length === books.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all books" }}
                />
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={() => handleRequestSort("id")}
                >
                  Book ID ↑↓
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "title"}
                  direction={orderBy === "title" ? order : "asc"}
                  onClick={() => handleRequestSort("title")}
                >
                  Book Title ↑↓
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "author"}
                  direction={orderBy === "author" ? order : "asc"}
                  onClick={() => handleRequestSort("author")}
                >
                  Author(s) ↑↓
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "genre"}
                  direction={orderBy === "genre" ? order : "asc"}
                  onClick={() => handleRequestSort("genre")}
                >
                  Genre/Category ↑↓
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "language"}
                  direction={orderBy === "language" ? order : "asc"}
                  onClick={() => handleRequestSort("language")}
                >
                  Language ↑↓
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "copies"}
                  direction={orderBy === "copies" ? order : "asc"}
                  onClick={() => handleRequestSort("copies")}
                >
                  Total Copies ↑↓
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "status"}
                  direction={orderBy === "status" ? order : "asc"}
                  onClick={() => handleRequestSort("status")}
                >
                  Status ↑↓
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBooks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((book) => {
                const isItemSelected = isSelected(book.id);
                return (
                  <TableRow
                    key={book.id}
                    hover
                    onClick={(event) => handleClick(event, book.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": book.id }}
                      />
                    </TableCell>
                    <TableCell>{book.id}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>{book.language}</TableCell>
                    <TableCell>{book.copies}</TableCell>
                    <TableCell sx={{ color: getStatusColor(book.status) }}>
                      {book.status}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography>Total Books: {books.length}</Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ mr: 2 }}>Show</Typography>
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            style={{ marginRight: "16px", padding: "8px" }}
          >
            {[10, 25, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <IconButton
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
          {[1, 2, 3, 4, 5].map((num) => (
            <IconButton
              key={num}
              onClick={() => setPage(num - 1)}
              color={page === num - 1 ? "primary" : "default"}
            >
              {num}
            </IconButton>
          ))}
          <IconButton
            onClick={() => setPage(page + 1)}
            disabled={page >= Math.ceil(books.length / rowsPerPage) - 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default BookSearchTable;
