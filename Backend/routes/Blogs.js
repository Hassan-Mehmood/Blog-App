const express = require("express");
const blogModel = require("../models/Blog-Model.js");
const errorHandler = require("../utils/error.js");
const router = express.Router();

// Get all blogs
router.get("/", async (req, res, next) => {
  try {
    const blogs = await blogModel.find();

    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
});

// Get single Blog
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await blogModel.findById(id);

    res.status(200).json(blog);
  } catch (error) {
    next(errorHandler(404, "Could not find blog"));
  }
});

// Create Blog
router.post("/write", async (req, res) => {
  try {
    const createdBlog = await blogModel.create({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
    });
    res.send(createdBlog);
  } catch (error) {
    res.send(error);
  }
});

// Update Blog
router.put("/update/:id", async (req, res) => {
  try {
    const blog = req.params.id;
    const updatedBlog = await blogModel.findByIdAndUpdate(blog, req.body, {
      new: true,
      runValidators: true,
    });

    res.json(updatedBlog);
  } catch (error) {
    res.send(error);
  }
});

// Delete Blog
router.delete("/delete/:id", async (req, res) => {
  try {
    const blog = req.params.id;

    const deleteBlog = await blogModel.findByIdAndDelete(blog, req.body);

    res.json(deleteBlog);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
