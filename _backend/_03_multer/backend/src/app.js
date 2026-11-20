
const express = require("express");
require("dotenv").config();


const app = express();



const postRouter = require("./router/post.router");
app.use("/api",postRouter)



module.exports = app