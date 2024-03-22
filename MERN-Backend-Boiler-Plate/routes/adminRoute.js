const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAuth = require("../middleware/tokenAuth");
const City = require("../model/city");
const { body, validationResult } = require("express-validator");
const { findById, findOneAndDelete } = require("../model/user");
const user = require("../model/user");
const city = require("../model/city");
const router = express.Router();

router.get("/allcities", async (req, res) => {
  const Cities = await city.find();
  res.send({ error: false, Cities });
});

router.get("/notificatons", tokenAuth, async (req, res) => {
  const userRole = await user.findById(userData.id);
  if(userRole.role !== "admin") {
    return res
      .status(400)
      .json({ error: true, message: "You are not authorized" });
  }
  res.send({ error: false, message: "Notifications" });
});

router.post("/addcity", tokenAuth, async (req, res) => {
  const { cityname } = req.body;
  try {
    const userRole = await user.findById(userData.id);
    if(userRole.role !== "admin") {
      return res
        .status(400)
        .json({ error: true, message: "You are not authorized" });
    }
    let city = await City.findOne({ cityname });
    if (city) {
      return res
        .status(400)
        .json({ error: true, message: "City already exists" });
    }
    city = new City({
      cityname,
    });
    await city.save();
    res.send({ error: false, message: "City created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

router.delete("/removecity", tokenAuth, async (req, res) => {
  const { cityname } = req.body;
  try {
    const userRole = await user.findById(userData.id);
    if(userRole.role !== "admin") {
      return res
        .status(400)
        .json({ error: true, message: "You are not authorized" });
    }
    let city = await City.findOne({ cityname });
    if (!city) {
      return res
        .status(400)
        .json({ error: true, message: "City does not exist" });
    }
    city = await City.findOneAndDelete({ cityname });
    res.send({ error: false, message: "City deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

router.delete("/deletephotographer", tokenAuth, async (req, res) => {
  const { id } = req.body;
  try {
    const userRole = await user.findById(userData.id);
    if(userRole.role !== "admin") {
      return res
        .status(400)
        .json({ error: true, message: "You are not authorized" });
    }
    let user = await user.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "User does not exist" });
    }
    user = await user.findByIdAndDelete(id);
    res.send({ error: false, message: "User deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

module.exports = router;