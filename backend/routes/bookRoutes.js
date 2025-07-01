import express from "express";
import verifyToken from "../middleware/authmiddleware.js";
import { checkRole } from "../middleware/checkRolemiddleware.js";
import {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById
} from "../controllers/bookController.js";
import { validateBook } from "../middleware/validateBook.js";
const router = express.Router();

router.post("/addbook", verifyToken, checkRole("admin"), validateBook, addBook); // Add
router.get("/getBookById" ,verifyToken,checkRole("admin"),getBookById) // show data in form
router.put("/books/:id", verifyToken, checkRole("admin"),validateBook, updateBook); // Edit
router.delete("/deletebook/:id", verifyToken, checkRole("admin"),validateBook, deleteBook); // Delete
router.get("/books", verifyToken, checkRole("admin"),validateBook, getAllBooks); // 👈 GET all books

export default router;
