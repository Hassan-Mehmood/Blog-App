const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    likes: { type: Number, default: 0 },
    comments: [{ body: String, date: Date }],
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
