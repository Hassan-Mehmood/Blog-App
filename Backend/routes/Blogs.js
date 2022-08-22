const express = require("express");
const {
  getAllBlogs,
  getBlog,
  createBolg,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blogs-controler.js");

const { verifyToken, verifyUser } = require("../utils/verifyToken");

const router = express.Router();

// Get all blogs
router.get("/", getAllBlogs);

// Get single Blog
router.get("/:id", getBlog);

// Create Blog
router.post("/write", verifyToken, createBolg);

// Update Blog
router.put("/update/:id", verifyUser, updateBlog);

// Delete Blog
router.delete("/delete/:id", deleteBlog);

module.exports = router;
