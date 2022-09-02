const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error.js");

exports.verifyToken = (req, res, next) => {
  const { cookies } = req;
  const token = cookies.token;

  if (!token) return next(errorHandler(401, "You are not authorized"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(errorHandler(403, "Token expired"));

    req.user = user;
    next();
  });
};
