require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const passport = require("passport");
const googleRouter = require("./router/google.router");
const discordRouter = require("./router/discord.router");
const githubRouter = require("./router/github.router");
const linkedinRouter = require("./router/linkedin.router");


const app = express();

// (server.js)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Initialize Passport (No express-session used; session: false)
app.use(passport.initialize());
app.use(googleRouter);
app.use(discordRouter);
app.use(githubRouter);
app.use(linkedinRouter);

module.exports = app;