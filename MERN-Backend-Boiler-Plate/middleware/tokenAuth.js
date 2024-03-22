const jwt = require("jsonwebtoken");
const { findOne } = require("../model/user");
const user = require("../model/user");
const JWT_SECRET = "thisissecratekey"; //anything you can type anything here

const tokenAuth = async (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(401).send({ error: "Access Denied" });
  }
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    userData = verified.user;
    next();
  } catch (error) {
    res.status(400).send({ error: true, error: "Invalid Token" });
  }
};
module.exports = tokenAuth;
