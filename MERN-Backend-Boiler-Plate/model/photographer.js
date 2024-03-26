const mongoose = require("mongoose");

const photographerSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  cityid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
  },

  ImageUrl: {
    type: String,
  },

  shopname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
  },

  contact: {
    type: Number,
    required: true,
  },

  shopadress: {
    type: String,
    required: true,
  },

  status: {
    type: String,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },

  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Photographer", photographerSchema);
