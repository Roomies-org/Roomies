import express from "express";
import { registration, login, verifyOtp } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", registration);

authRouter.post("/login", login);

authRouter.post("/verify-otp", verifyOtp);

export default authRouter;
