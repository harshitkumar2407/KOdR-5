import { Router } from "express";
// import { get } from "../controllers/Auth.controllers";
import requireAuth from "../middleware/auth.middleware";
import { getMyProfile, updateMyProfile,deleteMyProfile  } from "../controllers/user.controllers";

const userRouter = Router();

/**
 * @route GET /api/users/me
 * @name Get My Profile
 * @description Returns the authenticated user's profile.
 * @access Private
 * @version v1
 * @since 2026-11-05
 *
 * @auth HTTP-only cookie
 * @security JWT
 * @cookie {string} tala - JWT access token set by register or login
 *
 * @exampleRequest
 * GET /api/users/me
 * Cookie: tala=<JWT>
 *
 * @success {200} User profile returned
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
userRouter.get("/me", requireAuth, getMyProfile);

/**
 * @route PATCH /api/users/me
 * @name Update My Profile
 * @description Updates the authenticated user's profile and returns the updated profile.
 * @access Private
 * @version v1
 * @since 2026-11-05
 *
 * @contentType application/json
 *
 * @auth HTTP-only cookie
 * @security JWT
 * @cookie {string} tala - JWT access token set by register or login
 *
 * @body {string} [name] - Updated full name
 * @body {string} [email] - Updated email address
 * @body {string} [mobile] - Updated mobile number
 *
 * @exampleRequest
 * PATCH /api/users/me
 * Cookie: tala=<JWT>
 *
 * {
 *   "name": "Example User",
 *   "mobile": "5551234567"
 * }
 *
 * @success {200} Profile updated successfully
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
userRouter.patch("/me", requireAuth, updateMyProfile);

/**
 * @route DELETE /api/users/me
 * @name Delete My Profile
 * @description Permanently deletes the authenticated user's account.
 * @access Private
 * @version v1
 * @since 2026-11-05
 *
 * @auth HTTP-only cookie
 * @security JWT
 * @cookie {string} tala - JWT access token set by register or login
 *
 * @exampleRequest
 * DELETE /api/users/me
 * Cookie: tala=<JWT>
 *
 * @success {200} User deleted successfully
 *
 * @successExample
 * {
 *   "success": true,
 *   "message": "User deleted successfully"
 * }
 *
 * @error {401} Missing, invalid, or expired authentication cookie
 * @error {404} User not found
 * @error {500} Internal server error
 */
userRouter.delete("/me", requireAuth, deleteMyProfile);


export default userRouter;