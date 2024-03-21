const mongoose = require("mongoose");

const complaintsSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    complaint: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Complaints", complaintsSchema)