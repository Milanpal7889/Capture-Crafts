const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },

    usertype: [
        {
            type: String,
            default: "user",
            enum: ["user", "photographer"]
        }
    ],
    
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

module.exports = mongoose.model("User", userSchema)