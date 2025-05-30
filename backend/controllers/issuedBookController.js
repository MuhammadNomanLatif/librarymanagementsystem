import IssuedBook from "../models/IssuedBook.js";
import Book from "../models/book.js";

// View all issued books
export const viewIssuedBooks = async (req, res) => {
  try {
    const issuedBooks = await IssuedBook.find()
      .populate("user", "name email")
      .populate("book", "title author isbn");
    res.json(issuedBooks);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching issued books", error: err.message });
  }
};

// Issue a book
export const issueBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const book = await Book.findById(bookId);
    if (!book || !book.available) {
      return res.status(400).json({ message: "Book is not available" });
    }

    const issued = new IssuedBook({ user: userId, book: bookId });
    await issued.save();

    book.available = false;
    await book.save();

    res.status(201).json({ message: "Book issued successfully", issued });
  } catch (err) {
    res.status(500).json({ message: "Error issuing book", error: err.message });
  }
};

// Return a book
export const returnBook = async (req, res) => {
  try {
    const { id } = req.params; // issuedBookId

    const issued = await IssuedBook.findById(id);
    if (!issued || issued.returnedAt) {
      return res.status(400).json({ message: "Invalid or already returned" });
    }

    issued.returnedAt = new Date();
    await issued.save();

    const book = await Book.findById(issued.book);
    if (book) {
      book.available = true;
      await book.save();
    }

    res.json({ message: "Book returned successfully", issued });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error returning book", error: err.message });
  }
};
