import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import UserModel from "./model/userModel";

import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
console.log("App is running in", process.env.NODE_ENV, "mode");
// Connect database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());




import authRoutes from "./routes/auth.routes"
app.use("/auth", authRoutes);




export default app;