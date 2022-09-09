const express = require("express");
const { register, login } = require("../controllers/auth-controller.js");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be greater than 5 characters"),
  register
);
router.post("/login", login);

module.exports = router;
