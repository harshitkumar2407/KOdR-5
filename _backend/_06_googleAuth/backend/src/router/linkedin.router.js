const express = require("express");
const passport = require("passport");
const {
  linkedInAuthCallback,
  isLinkedInConfigured
} = require("../oAuth/linkedin.oAuth");

const linkedinRouter = express.Router();

if (isLinkedInConfigured) {
  linkedinRouter.get(
    "/auth/linkedin",
    passport.authenticate("linkedin", { session: false })
  );

  linkedinRouter.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin", { session: false }),
    linkedInAuthCallback
  );
}

module.exports = linkedinRouter;
