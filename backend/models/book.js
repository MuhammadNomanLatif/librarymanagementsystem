import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  availableCopies: {
    type: Number,
    required: true,
    min: 0,
  },
  totalCopies: {
    type: Number,
    required: true,
    min: 1,
  },
  floor: {
    type: String,
    required: true,
  },
  shelfLocation: {
    type: String,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
    min: 1,
  },
  status: {
    type: String,
    required: true,
    enum: ["available", "unavailable", "reserved"],
    default: "available",
  },
  volume: {
    type: String,
  },
  bookFeatures: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  publishedYear: {
    type: Number,
  },
  moral: {
    type: String,
  },
});

export default mongoose.model("Book", bookSchema);
