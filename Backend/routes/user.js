const express = require("express");
const {
  getAllUsers,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/user-controller.js");

const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

// Get all blogs
router.get("/all", getAllUsers);

// Get all blogs
router.get("/:id", getUser);

// Update User
router.put("/update/:id", verifyToken, updateUser);

// Delete User
router.delete("/delete/:id", verifyToken, deleteUser);

module.exports = router;
