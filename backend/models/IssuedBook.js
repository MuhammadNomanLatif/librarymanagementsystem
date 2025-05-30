import mongoose from "mongoose";

const issuedBookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  issuedAt: { type: Date, default: Date.now },
  returnedAt: { type: Date, default: null },
});

export default mongoose.model("IssuedBook", issuedBookSchema);
