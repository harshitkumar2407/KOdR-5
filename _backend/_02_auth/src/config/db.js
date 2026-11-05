const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://harshitkumar2408_db_user:9SxMJ8a6iFEn2uYT@cluster0.4is2kry.mongodb.net/")
    console.log("Database is connected");

  } catch (error) {
    console.log(error);

  };
}


module.exports = connectDb;
