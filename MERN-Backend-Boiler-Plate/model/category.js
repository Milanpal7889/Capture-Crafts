const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    
    categoryname: {
        type: String,
        required: true
    },
    
    imageUrl: {
        data: Buffer,
        contentType: String
    },

    status: String,
    
    created_at: {
        type: Date,
        default: Date.now
    },
    
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Category", categorySchema)