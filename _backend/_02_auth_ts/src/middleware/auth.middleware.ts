import { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "../types/auth.types";
import jwt from "jsonwebtoken";


async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const token = req.cookies.tala;

  if (!token) {
    res.status(401).json({ success: false, message: "Unauthorized" });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET_KEY;

    if (!secret) {
      throw new Error("JWT_SECRET_KEY is missing");
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}

export default requireAuth;
