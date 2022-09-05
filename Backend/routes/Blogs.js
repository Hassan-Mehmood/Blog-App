const express = require("express");
const {
  getAllBlogs,
  getBlog,
  createBolg,
  updateBlog,
  deleteBlog,
  getUserBlogs,
} = require("../controllers/Blogs-controler.js");
const { verifyToken } = require("../utils/verifyToken");
const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "../client/src/uploads/");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get all blogs
router.get("/", getAllBlogs);

// Get single Blog
router.get("/:id", getBlog);

// Get User Blogs
router.get("/user_blogs/:id", getUserBlogs);

// Create Blog
router.post("/write", upload.single("image"), verifyToken, createBolg);

// Update Blog
router.put("/update/:id", verifyToken, updateBlog);

// Delete Blog
router.delete("/delete/:id", verifyToken, deleteBlog);

module.exports = router;
