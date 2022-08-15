const express = require("express");
const blogModel = require("../models/Blog-Model.js");

const router = express.Router();

// Get all blogs
router.get("/", async (req, res) => {
  const blogs = await blogModel.find();

  res.status(200).json(blogs);
});

// Create Blog
router.post("/write", async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send("Request body is empty");
  }

  const createdBlog = await blogModel.create({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  });

  res.send(createdBlog);
});

// Update Blog
router.put("/update/:id", async (req, res) => {
  const blog = req.params.id;
  const updatedBlog = await blogModel.findByIdAndUpdate(blog, req.body, {
    new: true,
    runValidators: true,
  });

  res.json(updatedBlog);
});

module.exports = router;
