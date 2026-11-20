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

// app.use("*");
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );


// ROUTES
import authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);




export default app;