require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/auth", require("./routes/auth"));
app.use("/blogs", require("./routes/Blogs"));
app.use("/users", require("./routes/user"));

// Error Middleware
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "Something went wrong";

  return res.status(status).json({
    sucess: false,
    status,
    message,
    stack: process.env.NODE === "production" ? null : err.stack,
  });
});

// Database connection
mongoose.connect(process.env.MONGO_DB, () => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});

// Database Updates
let conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
