const blogModel = require("../models/Blog-Model.js");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await blogModel.find();

    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const id = req.params.id;
    const blog = await blogModel.findById(id);

    res.status(200).json(blog);
  } catch (error) {
    next(errorHandler(404, "Could not find blog"));
  }
};

const createBolg = async (req, res) => {
  try {
    const createdBlog = await blogModel.create({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
    });
    res.send(createdBlog);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = req.params.id;
    const updatedBlog = await blogModel.findByIdAndUpdate(blog, req.body, {
      new: true,
      runValidators: true,
    });

    res.json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = req.params.id;

    const deleteBlog = await blogModel.findByIdAndDelete(blog, req.body);

    res.json(deleteBlog);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBlogs, getBlog, createBolg, updateBlog, deleteBlog };
