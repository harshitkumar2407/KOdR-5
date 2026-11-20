const express = require("express");
const cookieParser = require("cookie-parser");
const AuthRouter = require("./router/Auth.router");
const homeRouter = require("./router/home.router");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRouter);
app.use("/home",homeRouter)




module.exports = app;
