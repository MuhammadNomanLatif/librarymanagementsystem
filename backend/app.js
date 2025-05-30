import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import connectDb from "./utils/connectDb.js";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded());
// Port number
const PORT = process.env.PORT || 3000;

app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", bookRoutes);

connectDb();
// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
