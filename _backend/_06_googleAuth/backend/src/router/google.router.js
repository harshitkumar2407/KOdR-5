const express = require("express");
const passport = require("passport");
const { authenticateJWT } = require("../middleware/auth.middleware");
const { googleAuthCallback, CurrentUser, Logout } = require("../oAuth/google.oAuth");

const googleRouter = express.Router();

googleRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
    prompt: "select_account"
  })
);

googleRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuthCallback
);

googleRouter.get("/api/current-user", authenticateJWT, CurrentUser);
googleRouter.get("/auth/logout", Logout);

module.exports = googleRouter;
