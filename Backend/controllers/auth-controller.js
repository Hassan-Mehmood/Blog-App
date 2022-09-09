const userModel = require("../models/user-Model");
const bcrypt = require("bcrypt");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const register = async (req, res, next) => {
  try {
    const validationerrors = validationResult(req);

    if (!validationerrors.isEmpty()) {
      const errors = validationerrors.array();
      return res.status(400).json(errors);
    }

    const pass = req.body.password.toString();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);

    const registerUser = new userModel({
      username: req.body.userName,
      email: req.body.email,
      password: hash,
    });

    await registerUser.save();
    res.status(201).send(registerUser);
  } catch (error) {
    next(errorHandler(error.status, error.message));
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.userName });
    if (!user) {
      return next(errorHandler(404, "User not found!"));
    }
    const pass = bcrypt.compareSync(req.body.password, user.password);
    if (!pass) {
      return next(errorHandler(400, "Wrong password or username!"));
    }

    const { password, ...otherDetails } = user._doc;

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Logged In", userDetails: otherDetails });
  } catch (error) {
    res.send(error);
    return next(error);
  }
};

module.exports = { register, login };
