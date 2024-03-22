const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAuth = require("../middleware/tokenAuth");
const User = require("../model/photographer");
const { body, validationResult } = require("express-validator");
const cityModal = require("../model/city");
const photographerModal = require("../model/photographer");
const userModal = require("../model/user");
const bookingModal = require("../model/booking");
const router = express.Router();
const JWT_SECRET = "thisissecratekey";

router.get("/all", async (req, res) => {
    const bookings = await bookingModal.find();
    res.send({ error: false, bookings });
})

router.post("/bookcity", tokenAuth, async (req, res) => {
    const { city, photographer } = req.body;
    try {
        const booking = new bookingModal({
            city,
            photographer
        })
        await booking.save();
        res.send({ error: false, message: "Booking created successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ error: true, message: "Server Error" });
    }
});

module.exports = router