require("dotenv").config();

const app = require("./src/app");
const connetToDb = require("./src/config/db");

connetToDb();
const port = process.env.PORT || 3000


app.listen(port,()=>{
    console.log(`✅  Server is running ${port}`);
})
