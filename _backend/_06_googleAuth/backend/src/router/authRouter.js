const { Router } = require("express");
const { RegisterController, LoginController } = require("../controller/authController");

const authRouter = Router();

authRouter.post("/register",RegisterController)
authRouter.post("/login",LoginController)



module.exports = authRouter