const BlogModel = require("../models/Blog-Model.js");
const UserModel = require("../models/user-Model.js");
const errorHandler = require("../utils/error.js");

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogModel.find()
      .populate("author", "username")
      .sort({ createdAt: -1 })
      .exec(function (err, blog) {
        if (err) return next(err);
        return res.status(200).json(blog);
      });

    // res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const id = req.params.id;

    BlogModel.findById(id)
      .populate("author", "username")
      .exec(function (err, blog) {
        if (err) return next(err);

        return res.status(200).json(blog);
      });

    // res.status(200).json(blog);
  } catch (error) {
    next(errorHandler(404, "Could not find blog"));
  }
};

const getUserBlogs = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const user = await UserModel.findById.apply(id);

    UserModel.findById(id)
      .populate("posts")
      .exec(function (err, blog) {
        if (err) return next(err);
        const { password, ...userData } = blog._doc;
        return res.status(200).json(userData);
      });

    // res.status(200).json(blog);
  } catch (error) {
    next(errorHandler(404, "Could not find blog"));
  }
};

const createBolg = async (req, res, next) => {
  try {
    const authorID = req.user.id; //This user.id comes after authenticating jwt token

    const tags = req.body.tags.split(",");

    const createdBlog = await BlogModel.create({
      title: req.body.title,
      excerpt: req.body.excerpt,
      author: authorID,
      body: req.body.body,
      image: req.file.originalname,
      tags: tags,
    });

    // Pushing post to user's posts
    await UserModel.findByIdAndUpdate(authorID, {
      $push: { posts: createdBlog._id },
    });

    res.status(201).json({ response: "Published successfully" });
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const clientID = req.user.id;
    const blogID = req.params.id;
    const blog = await BlogModel.findById(blogID);

    if (clientID == blog.author) {
      const updatedBlog = await BlogModel.findByIdAndUpdate(blogID, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(updatedBlog);
      console.log("Updated");
    } else {
      next(errorHandler(401, "You are not authorized to update this blog"));
    }
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const deleteBlogID = req.params.id;
    const userTokenID = req.user.id;
    const blog = await BlogModel.findById(deleteBlogID);

    if (userTokenID == blog.author) {
      await BlogModel.findByIdAndDelete(deleteBlogID, req.body);

      res.status(200).json({ response: "Blog deleted" });
    } else {
      next(errorHandler(401, "You are not authorized to delete this blog"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBlogs,
  getBlog,
  createBolg,
  updateBlog,
  deleteBlog,
  getUserBlogs,
};
