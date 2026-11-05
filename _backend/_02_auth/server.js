require("dotenv").config();
const app = require("./src/app");





app.get("/",(req,res) =>{
    return res.send("backend running successfully")
})


app.listen(3000,() => {
    console.log("server is running fully");
} )