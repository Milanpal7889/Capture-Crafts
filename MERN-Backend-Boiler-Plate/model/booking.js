const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  cityid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
  },

  photographerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photographer",
  },
  contact: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  status: String,

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema)