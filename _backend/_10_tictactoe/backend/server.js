require("dotenv").config()
const express = require("express")

const cors = require("cors");
const http = require("http");
const path = require("path");

const {fileURLToPath}   = require("url");
const { setupSocketServer } = require("./src/socket");


const app = express();
const httpServer = http.createServer(app);



app.use(express.json())


const __filename = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__filename,"public")))


setupSocketServer(httpServer);

httpServer.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
})

