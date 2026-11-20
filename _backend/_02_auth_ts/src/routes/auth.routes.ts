
import { Router } from "express";
import { registerUser,loginUser,getMe ,logoutUser} from "../controllers/Auth.controllers";
import requireAuth from "../middleware/auth.middleware";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @name Register User
 * @description Creates a user account and sets an HTTP-only JWT cookie.
 * @access Public
 * @version v1
 * @since 2026-11-05
 *
 * @contentType application/json
 *
 * @body {string} name - User's full name (required)
 * @body {string} email - User's email address (required)
 * @body {string} password - User's password (required)
 * @body {string} [mobile] - User's mobile number
 *
 * @exampleRequest
 * POST /api/auth/register
 *
 * {
 *   "name": "Example User",
 *   "email": "user@example.com",
 *   "password": "example-password",
 *   "mobile": "5551234567"
 * }
 *
 * @success {201} User registered successfully; sets the tala JWT cookie
 *
 * @successExample
 * {
 *   "success": true,
 *   "message": "User registered successfully",
 *   "data": {
 *     "id": "507f1f77bcf86cd799439011",
 *     "name": "Example User",
 *     "email": "user@example.com",
 *     "mobile": "5551234567"
 *   }
 * }
 *
 * @error {400} Required fields are missing
 * @error {409} Email already exists
 * @error {500} Internal server error
 */
authRouter.post("/register", registerUser);

/**
 * @route POST /api/auth/login
 * @name Login User
 * @description Authenticates a user and sets an HTTP-only JWT cookie.
 * @access Public
 * @version v1
 * @since 2026-11-05
 *
 * @contentType application/json
 *
 * @body {string} email - User's email address (required)
 * @body {string} password - User's password (required)
 *
 * @exampleRequest
 * POST /api/auth/login
 *
 * {
 *   "email": "user@example.com",
 *   "password": "example-password"
 * }
 *
 * @success {200} User logged in successfully; sets the tala JWT cookie
 *
 * @successExample
 * {
 *   "success": true,
 *   "message": "User logged in successfully",
 *   "data": {
 *     "id": "507f1f77bcf86cd799439011",
 *     "name": "Example User",
 *     "email": "user@example.com",
 *     "mobile": "5551234567"
 *   }
 * }
 *
 * @error {400} Required fields are missing
 * @error {401} Invalid credentials
 * @error {500} Internal server error
 */
authRouter.post("/login", loginUser);

/**
 * @route GET /api/auth/getme
 * @name Get Current User
 * @description Returns the profile of the user authenticated by the tala cookie.
 * @access Private
 * @version v1
 * @since 2026-11-05
 *
 * @auth HTTP-only cookie
 * @security JWT
 * @cookie {string} tala - JWT access token set by register or login
 *
 * @exampleRequest
 * GET /api/auth/getme
 * Cookie: tala=<JWT>
 *
 * @success {200} Current user profile returned
 *
 * @successExample
 * {
 *   "success": true,
 *   "data": {
 *     "id": "507f1f77bcf86cd799439011",
 *     "name": "Example User",
 *     "email": "user@example.com",
 *     "mobile": "5551234567"
 *   }
 * }
 *
 * @error {401} Missing, invalid, or expired authentication cookie
 * @error {404} User not found
 * @error {500} Internal server error
 */
authRouter.get("/getme",requireAuth, getMe);

/**
 * @route POST /api/auth/logout
 * @name Logout User
 * @description Clears the authenticated user's tala JWT cookie.
 * @access Private
 * @version v1
 * @since 2026-11-05
 *
 * @auth HTTP-only cookie
 * @security JWT
 * @cookie {string} tala - JWT access token set by register or login
 *
 * @exampleRequest
 * POST /api/auth/logout
 * Cookie: tala=<JWT>
 *
 * @success {200} User logged out successfully; clears the tala cookie
 *
 * @successExample
 * {
 *   "success": true,
 *   "message": "User logged out successfully"
 * }
 *
 * @error {401} Missing, invalid, or expired authentication cookie
 * @error {500} Internal server error
 */
authRouter.post("/logout", requireAuth, logoutUser);

export default authRouter;