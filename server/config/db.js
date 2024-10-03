require("dotenv").config();

// To deal with the mongoDB database
const mongoose = require("mongoose");

// To connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Success! Connected to MongoDB.");
  } catch (err) {
    console.error("Error connecting to MongoDB!", err);
  }
};

module.exports = connectDB;
