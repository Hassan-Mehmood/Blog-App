const userModel = require("../models/user-Model.js");
const errorHandler = require("../utils/error.js");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.find();

    const { password, ...others } = users;

    res.status(200).json(others);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    next(errorHandler(404, "Could not find user"));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const clientID = req.user.id;
    const userID = req.params.id;
    const user = await userModel.findById(userID);

    if (clientID === user._id) {
      const updatedUser = await userModel.findByIdAndUpdate(userID, req.body, {
        new: true,
        runValidators: true,
      });
      res.json(updatedBlog);
    } else {
      next(errorHandler(401, "You are not authorized to update this user"));
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deleteUserID = req.params.id;
    const tokenUserID = req.user.id;
    const user = await userModel.findById(tokenUserID);

    if (tokenUserID === user._id) {
      const deleteUser = await userModel.findByIdAndDelete(
        deleteUserID,
        req.body
      );

      res.json({ message: "User deleted" });
    } else {
      next(errorHandler(401, "You are not authorized to delete this user"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
