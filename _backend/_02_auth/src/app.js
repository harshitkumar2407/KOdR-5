const express = require("express");
const connectDb = require("./config/db");
const bcrypt = require("bcrypt");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const app = express();
// Parse JSON request bodies and read cookies from incoming requests.
app.use(express.json());
app.use(cookieParser());
connectDb();

//1. Register a user, hash their password, and issue an authentication token.
app.post("/register", async (req, res) => {
    const {name,email,password} = req.body;

    //2. Require all registration fields before creating the user.
    if(!name || !email || !password){
        return res.status(400).send("please fill all the fields");
    }
    //3. Check if the user already exists in the database.
    const user = await UserModel.findOne({email});
    if(user){
        return res.status(400).send("user already exists");
    }

    //4. Store only the hashed password, never the submitted password.
    const hashPassword = bcrypt.hashSync(password,10);

    //5. Create the user in the database with the hashed password.
    const NewUser = await UserModel.create({
        name,
        email,
        password: hashPassword
    });


    //6. Sign a one-hour JWT and send it as an HTTP-only cookie.
    let token = jwt.sign({
        id: NewUser._id,
    }, process.env.JWT_SECRET,
    {   expiresIn: "1h" }   );

    //7. Set the token as an HTTP-only cookie to prevent client-side access.
    res.cookie("token", token, { httpOnly: true });
    //8. Return a success response with the new user and token.
    return res.status(201).send({
        message: "user registered successfully",
        user: NewUser,
        token
    })

})

app.post("/login", async (req, res) => {
    const {email,password} = req.body;
    //1. Require both email and password for login.
    if(!email || !password){
        return res.status(400).send("please fill all the fields");
    }
    //2. Check if the user exists in the database.
    const user = await UserModel.findOne({email});
    if(!user){
        return res.status(400).send("user does not exist");
    }
    //3. Compare the submitted password with the stored hashed password.
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if(!isPasswordValid){
        return res.status(400).send("invalid password");
    }
    //4. Sign a one-hour JWT and send it as an HTTP-only cookie.
    let token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET,
    {   expiresIn: "1h" }   );

    //5. Set the token as an HTTP-only cookie to prevent client-side access.
    res.cookie("token", token, { httpOnly: true });
    //6. Return a success response with the user and token.
    return res.status(200).send({
        message: "user logged in successfully",
        user,
        token
    })
})


module.exports = app;