// Import the express router
const router = require("express").Router();

// Import the routes
const blogRoutes = require("./blogRoutes");
// const userRoutes = require("./userRoutes");

// To use the routes
router.use("/blog", blogRoutes);
// router.use("/user", userRoutes);

// To handle the 404 error
router.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
  });
});

// To export the router
module.exports = router;
