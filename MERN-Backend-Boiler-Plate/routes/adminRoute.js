const express = require("express");
const mongoose = require("mongoose");
const { adminAuth } = require("../middleware/tokenAuth");
const CityModal = require("../model/city");
const userModal = require("../model/user");
const path = require('path')
const categoryModal = require("../model/category");
const { upload } = require("../startup/db");
const fs = require('fs');
const uploadsDir = path.join(__dirname, '../uploads');

const router = express.Router();


router.get("/allusers", async (req, res) => {
  const users = await userModal.find();
  res.send({ error: false, users });
});

// category routes
router.get("/allcategories", async (req, res) => {
  const categories = await categoryModal.find();
  res.send({ error: false, categories });
});

router.post("/addcategory", upload.single('image'), adminAuth, async (req, res) => {
  const { categoryname } = req.body;
  try {
    if(!req.file) {
      return res
        .status(400)
        .json({ error: true, message: "Please upload an image" });
    }
    const fileName = req.file.originalname;

    let category = await categoryModal.findOne({ categoryname });
    if (category) {
      return res
        .status(400)
        .json({ error: true, message: "Category already exists" });
    }
    category = new categoryModal({
      categoryname,
      imageUrl: fileName
    });
    await category.save();
    res.send({ error: false, message: "Category created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

router.put("/updatecategory",upload.single('image'), adminAuth, async (req, res) => {
  const { id, categoryname } = req.body;
  try {
    const category = await categoryModal.findById(id);
    if (!category) {
      return res
        .status(400)
        .json({ error: true, message: "Category not found" });
    }
    if(req.file) {
      const fileName = req.file.originalname;
      fs.renameSync(path.join(uploadsDir, category.imageUrl), path.join(uploadsDir, fileName));
      category.imageUrl = fileName;
    }
    if(categoryname){
      category.categoryname = categoryname;
    }
    await category.save();
    res.send({ error: false, message: "Category updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

router.delete("/removecategory", adminAuth, async (req, res) => {
  const { id } = req.body;
  try {
    const category = await categoryModal.findById(id);
    if (!category) {
      return res
        .status(400)
        .json({ error: true, message: "Category not found" });
    }
    await categoryModal.findByIdAndDelete(id);
    res.send({ error: false, data:category, message: "Category removed successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});


// city routes
router.get("/allcities", async (req, res) => {
  const Cities = await CityModal.find();
  res.send({ error: false, Data: Cities });
});

router.post("/addcity", adminAuth, async (req, res) => {
  const { cityname, citydesc } = req.body;
  try {
    const userRole = await userModal.findById(userData.id);
    if (userRole.role !== "admin") {
      return res
        .status(400)
        .json({ error: true, message: "You are not authorized" });
    }
    let city = await CityModal.findOne({ cityname });
    if (city) {
      return res
        .status(600)
        .json({ error: true, exists: true, message: "City already exists" });
    }
    city = new CityModal({
      cityname,
      citydesc,
    });
    await city.save();
    res.send({ error: false, message: "City created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

router.put('/updatecity/:id', adminAuth, async (req, res) => {
  try {
    const reqBody = { ...req.body };
    const id = req.params.id;
    const cityData = reqBody;
    const city = await CityModal.findByIdAndUpdate(id, cityData, { new: true });
    res.send({
      error: false,
      data: city,
      message: "City updated successfully",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});

router.delete("/removecity/:id", adminAuth, async (req, res) => {
  const { cityname } = req.body;
  const id = req.params.id;
  try {
    const userRole = await userModal.findById(userData.id);
    if (userRole.role !== "admin") {
      return res
        .status(400)
        .json({ error: true, message: "You are not authorized" });
    }
    let city = await CityModal.findById(id);
    if (!city) {
      return res
        .status(400)
        .json({ error: true, message: "City does not exist" });
    }
    city = await CityModal.findByIdAndDelete(id);
    res.send({ error: false,data: city, message: "City deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: true, message: "Server Error" });
  }
});


// photographer routes
router.delete("/deletephotographer", adminAuth, async (req, res) => {
  const { id } = req.body;
  try {
    const userRole = await user.findById(userData.id);
    if (userRole.role !== "admin") {
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
