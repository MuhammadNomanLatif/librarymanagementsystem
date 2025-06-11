import express from "express";
import verifyToken from "../middleware/authmiddleware.js";
import {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/addbook",verifyToken, addBook); // Add
router.put("/books/:id",verifyToken, updateBook); // Edit
router.delete("/books/:id",verifyToken, deleteBook); // Delete
router.get("/books",verifyToken, getAllBooks); // 👈 GET all books

export default router;
