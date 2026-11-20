const express = require("express");
const authenticate = require("../middleware/auth.middleware");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../models/user.model");

const homeRouter = express.Router();

homeRouter.get("/", authenticate, (req, res) => {
  res.send({
    success: true,
    message: "Main section",
  });
});

module.exports = homeRouter;