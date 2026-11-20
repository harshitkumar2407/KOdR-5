const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }
})

const userModel = new model("user",userSchema);


module.exports = userModel
