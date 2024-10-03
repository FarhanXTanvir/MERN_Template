// To access the environment variables
require("dotenv").config();
require("events").EventEmitter.defaultMaxListeners = 20;

// To initialize the express app
const express = require("express");
const app = express();

// To handle cross-origin requests
const cors = require("cors");
app.use(cors());

// To parse the incoming request body
app.use(express.json());

// To connect to the database
const connectDB = require("./config/db");
connectDB();

// To all routes
app.use("/api", require("./routes/routes"));
// default route
app.get("/", (req, res) => {
  res.send("Welcome to the BanglaBook API");
});

// To start the server
const PORT = process.env.PORT || 5000;

// To listen to the server
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}, api: ${process.env.HOST}:${PORT}`
  );
});
