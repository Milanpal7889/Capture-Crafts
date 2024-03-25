const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    
    cityname: {
        type: String,
        required: true
    },

    citydesc: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String
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

module.exports = mongoose.model("City", citySchema)