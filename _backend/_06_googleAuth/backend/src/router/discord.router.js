const express = require("express");
const passport = require("passport");
const { discordAuthCallback } = require("../oAuth/discord.oAuth");

const discordRouter = express.Router();

discordRouter.get(
  "/auth/discord",
  passport.authenticate("discord", {
    session: false,
    scope: ["identify", "email"]
  })
);

discordRouter.get(
  "/auth/discord/callback",
  passport.authenticate("discord", { session: false }),
  discordAuthCallback
);

module.exports = discordRouter;
