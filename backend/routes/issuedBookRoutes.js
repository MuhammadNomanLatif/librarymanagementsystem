import express from "express";
import {
  viewIssuedBooks,
  issueBook,
  returnBook,
} from "../controllers/issuedBookController.js";

const router = express.Router();

router.get("/issued", viewIssuedBooks); // View all issued books
router.post("/issued", issueBook); // Issue a book
router.put("/issued/:id/return", returnBook); // Return a book

export default router;
