import express from "express";
import verifyToken from "../middleware/authmiddleware.js";
import { checkRole } from "../middleware/checkRolemiddleware.js";
import {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/addbook", verifyToken, checkRole("admin"), addBook); // Add
router.put("/books/:id", verifyToken, checkRole("admin"), updateBook); // Edit
router.delete("/books/:id", verifyToken, checkRole("admin"), deleteBook); // Delete
router.get("/books", verifyToken, checkRole("admin"), getAllBooks); // 👈 GET all books

export default router;
