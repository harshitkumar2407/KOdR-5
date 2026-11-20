const { Router } = require("express");
const { Register, Login, Logout } = require("../controller/auth.controller");
const authenticate = require("../middleware/auth.middleware");

const authRoute = Router()

authRoute.post("/register",Register)
authRoute.post("/login",Login)
authRoute.post("/logout", authenticate, Logout)


module.exports = authRoute
