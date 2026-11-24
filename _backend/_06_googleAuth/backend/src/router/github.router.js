const { Router } = require("express");
const passport = require("passport");
const { authenticateJWT } = require("../middleware/auth.middleware");
const {
  githubAuthCallback,
  CurrentUser,
  Logout
} = require("../oAuth/github.oAuth");

const githubRouter = Router();

githubRouter.get(
  "/auth/github",
  passport.authenticate("github", {
    session: false,
    scope: ["user:email"]
  })
);

githubRouter.get(
  "/auth/github/callback",
  passport.authenticate("github", { session: false }),
  githubAuthCallback
);

githubRouter.get("/api/current-user", authenticateJWT, CurrentUser);
githubRouter.get("/auth/logout", Logout);

module.exports = githubRouter