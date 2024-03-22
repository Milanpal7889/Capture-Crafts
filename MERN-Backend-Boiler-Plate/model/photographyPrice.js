const mongoose = require("mongoose")

const photographypriceSchema = new mongoose.Schema({
    
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },

    photographerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Photographer",
    },

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    price: {
        type: Number,
        required: true
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

module.exports = mongoose.model("Photographyprice", photographypriceSchema)