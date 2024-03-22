const mongoose = require("mongoose");

const complaintsSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    subject:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    read:{
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Complaints", complaintsSchema)