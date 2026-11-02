const express = require("express")

const app = express();
app.use(express.json())

let users = [];

app.get('/',(req,res)=>{
    res.send("Server is working")
})

app.post('/userdata',(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.send("Data received")
})

app.get('/getdata',(req,res)=>{
    res.send(users)
})


app.listen(3000,()=>{
    console.log("Server is running");
})
