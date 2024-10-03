// To handle the route for the blog
const router = require("express").Router();
const blogController = require("../controllers/blogController");

// To handle the GET request for the blog
router.get("/", blogController.getAllBlogs);

// To handle the GET request for the blog by id
router.get("/:id", blogController.getBlogById);

// To handle the POST request for the blog
router.post("/", blogController.postBlog);

// To handle the PUT request for the blog
router.put("/:id", blogController.updateBlog);

// To handle the DELETE request for the blog
router.delete("/:id", blogController.deleteBlog);

// To export the router
module.exports = router;
