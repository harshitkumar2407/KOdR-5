import mongoose, { Schema, Document } from "mongoose";

// Define the User interface extending Document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    mobile?: string; // Optional field
}

// Create a User schema
const userSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
    mobile: { type: String, required: false },
});

// Create and export the User model
const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;