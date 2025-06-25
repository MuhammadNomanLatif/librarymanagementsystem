import Book from "../models/book.js";

// Create Book
export const addBook = async (req, res) => {
  try {
    const { title, author, isbn, available } = req.body;
    const book = new Book({ title, author, isbn, available });
    await book.save();
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
};

// Update Book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book updated", book: updated });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating book", error: err.message });
  }
};

// Delete Book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted", book: deleted });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting book", error: err.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // You can add filters/sorting if needed
    res.json({ books }); // or just res.json(books) if frontend expects raw array
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching books", error: err.message });
  }
};
