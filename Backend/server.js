require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/blogs", require("./routes/Blogs"));

// Error middleware
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

mongoose.connect(process.env.MONGO_DB, () => {
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});

let conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
