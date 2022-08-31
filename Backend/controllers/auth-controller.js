const userModel = require("../models/user-Model");
const bcrypt = require("bcrypt");
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    // This is b/c hashSync() expects first parameter to be a string
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
      res.status(404).json({ message: "User not found" });
      console.log("!USER");
      return;
      // return next(errorHandler(404, "Could not find the user"));
    }
    const pass = bcrypt.compareSync(req.body.password, user.password);
    if (!pass) {
      res.json({ message: "Username or password is incorrect" });
      console.log("!PASS");
      return;
      // return next(errorHandler(400, "Username or password is incorrect"));
    }

    const { password, ...otherDetails } = user._doc;

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT
    );

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Logged In", User_Details: otherDetails });
    console.log("FUNCTION END");
  } catch (error) {
    console.log("CATCH");
    res.send(error);
    return;
    // next(error);
  }
};

module.exports = { register, login };
