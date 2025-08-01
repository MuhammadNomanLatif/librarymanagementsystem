import Book from "../models/book.js";

// Create Book
export const addBook = async (req, res) => {
  console.log(req.body);
  try {
    const {
      bookTitle,
      authors,
      isbn,
      category,
      language,
      availableCopies,
      totalCopies,
      floor,
      shelfLocation,
      totalPages,
      status,
      volume,
      bookFeatures,
      publishedYear,
      moral,
    } = req.body;
    const book = new Book({
      bookTitle,
      authors,
      isbn,
      category,
      language,
      availableCopies,
      totalCopies,
      floor,
      shelfLocation,
      totalPages,
      status,
      volume,
      bookFeatures,
      publishedYear,
      moral,
    });
    await book.save();
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
};
export const getBookById = async (req, res) => {
  console.log("called in controller");
  try {
    const { id } = req.params;
    console.log(id);
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ book });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving book", error: err.message });
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
