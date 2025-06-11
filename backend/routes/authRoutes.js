import express from "express";
import { signup,login,logoutUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login",login)

// routes/authRoutes.js
router.post("/logout", logoutUser);

export default router;
