const userModel = require("../models/user-Model");
const bcrypt = require("bcrypt");
const errorHandler = require("../utils/error");

const register = async (req, res, next) => {
  try {
    // This is b/c hashSync() expects first parameter to be a string
    const pass = req.body.password.toString();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);

    const registerUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await registerUser.save();
    res.status(201).send(registerUser);
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return next(errorHandler(404, "Could not find the user"));
    }

    const password = bcrypt.compareSync(req.body.password, user.password);
    if (!password) {
      return next(errorHandler(400, "Username or password is incorrect"));
    }

    res.json(user);
  } catch (error) {
    next(errorHandler(500, error));
  }
};

module.exports = { register, login };
