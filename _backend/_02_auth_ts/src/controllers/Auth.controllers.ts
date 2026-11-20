import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import UserModel from "../model/userModel";
import type { JwtPayload } from "../types/auth.types";



interface RegisterBody {
  name: string;
  email: string;
  password: string;
  mobile?: string;
}

interface LoginBody {
  email: string;
  password: string;
}

// Register route
async function registerUser ( req: Request<{}, {}, RegisterBody>,
  
                              res: Response): Promise<void>  {

    try {
      // 1. Get data from body
      const { name, email, password, mobile } = req.body;

      // 2. Validate data
      if (!name || !email || !password) {
        res.status(400).json({
          success: false,
          message: "All fields are required",
        });
        return;
      }

      // 3. Check whether user exists
      const isExists = await UserModel.findOne({ email });

      // 4. Return error if user exists
      if (isExists) {
        res.status(409).json({
          success: false,
          message: "Email already exists",
        });
        return;
      }

      // 5. Hash password
      const hashPass = await bcrypt.hash(password, 12);

      // 6. Save user in database
      const user = await UserModel.create({
        name,
        email,
        password: hashPass,
        mobile,
      });

      // 7. Generate JWT token
      const secret = process.env.JWT_SECRET_KEY;

      if (!secret) {
        throw new Error("JWT_SECRET_KEY is missing");
      }

      const token = jwt.sign(
        { id: user._id.toString() } satisfies JwtPayload,
        secret,
        { expiresIn: "1h" }
      );

      // 8. Save token in cookie
      res.cookie("tala", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });

      // 9. Send response
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        },
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }



// Login route
async function loginUser (
    req: Request<{}, {}, LoginBody>,
    res: Response
  ): Promise<void> {

    try {
      // 1. Get data from body
      const { email, password } = req.body;

      // 2. Validate data
      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: "All fields are required",
        });
        return;
      }

      // 3. Check whether user exists
      const isExists = await UserModel.findOne({ email });

      // 4. Return error if user does not exist
      if (!isExists) {
        res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
        return;
      }

      // 5. Check password
      const checkPass = await bcrypt.compare(
        password,
        isExists.password
      );

      if (!checkPass) {
        res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
        return;
      }

      // 6. Generate JWT token
      const secret = process.env.JWT_SECRET_KEY;

      if (!secret) {
        throw new Error("JWT_SECRET_KEY is missing");
      }

      const token = jwt.sign(
        { id: isExists._id.toString() } satisfies JwtPayload,
        secret,
        { expiresIn: "1h" }
      );

      // 7. Save token in cookie
      res.cookie("tala", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });

      // 8. Send response
      res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: {
          id: isExists._id,
          name: isExists.name,
          email: isExists.email,
          mobile: isExists.mobile,
        },
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }


  // user getme
  async function getMe(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const user = await UserModel.findById(req.user?.id);

      if (!user) {
        res.status(404).json({
          success: false,
          message: "User not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        },
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

async function logoutUser(req: Request, res: Response): Promise<void> {
  try {
    // Clear the cookie
    res.clearCookie("tala", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export type RequestWithUser = Request & { user?: JwtPayload };

export { registerUser, loginUser, getMe, logoutUser };
