const express = require("express");

const router = express.Router();

// Get all blogs
router.get("/", (req, res) => {
  res.status(200).json("Blogs");
});

// Create Blog
router.post("/write", (req, res) => {});

module.exports = router;
