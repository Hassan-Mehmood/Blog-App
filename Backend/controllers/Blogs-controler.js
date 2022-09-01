const blogModel = require("../models/Blog-Model.js");
const errorHandler = require("../utils/error.js");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await blogModel.find();
    // console.log(blogs);
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

const createBolg = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.user);
    const createdBlog = await blogModel.create({
      title: req.body.title,
      author: req.user.author,
      body: req.body.body,
    });
    res.send(createdBlog);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const clientID = req.user.id;
    const blogID = req.params.id;
    const blog = await blogModel.findById(blogID);

    console.log(clientID, blog.author);

    if (clientID === blog.author) {
      const updatedBlog = await blogModel.findByIdAndUpdate(blogID, req.body, {
        new: true,
        runValidators: true,
      });
      res.json(updatedBlog);
    } else {
      next(errorHandler(401, "You are not authorized to update this blog"));
    }
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    console.log(req.user);
    const deleteBlogID = req.params.id;
    const userTokenID = req.user.id;
    const blog = await blogModel.findById(deleteBlogID);

    if (userTokenID === blog.author) {
      const deleteBlog = await blogModel.findByIdAndDelete(
        deleteBlogID,
        req.body
      );

      res.json(deleteBlog);
    } else {
      next(errorHandler(401, "You are not authorized to delete this blog"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBlogs, getBlog, createBolg, updateBlog, deleteBlog };
