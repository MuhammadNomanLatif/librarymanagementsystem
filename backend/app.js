import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import connectDb from "./utils/connectDb.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded());
// Port number
const PORT = process.env.PORT || 3000;

app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);

connectDb();
// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
