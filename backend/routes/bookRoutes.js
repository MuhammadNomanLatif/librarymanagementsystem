import express from "express";
import {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/addbook", addBook); // Add
router.put("/books/:id", updateBook); // Edit
router.delete("/books/:id", deleteBook); // Delete
router.get("/books", getAllBooks); // 👈 GET all books

export default router;
