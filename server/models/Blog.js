// To do CRUD operations
const mongoose = require("mongoose");

// To create the schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// To create the model
const Blog = mongoose.model("Blog", blogSchema);

// To export the model
module.exports = Blog;
