import express from "express";
import {
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/books", addBook); // Add
router.put("/books/:id", updateBook); // Edit
router.delete("/books/:id", deleteBook); // Delete

export default router;
