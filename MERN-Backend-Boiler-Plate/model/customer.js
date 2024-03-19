const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    },

    contact: {
        type: Number,
        required: true,
    },

    address: {
        type: String,
    },

    password: {
        type: String,
        required: true,
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
})

module.exports = mongoose.model("Customer", customerSchema)