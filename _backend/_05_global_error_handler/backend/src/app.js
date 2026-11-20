const express = require("express");
const authRouter = require("./router/authRouter");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("ok")
})


app.use("/api/auth",authRouter)


app.use(errorMiddleware);

module.exports = app