const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth-controller.js");
const { validate } = require("../controllers/form-Auth");

router.post("/register", [validate("registerUser")], register);
router.post("/login", login);

module.exports = router;
