// const mongoose = require('mongoose');
import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('guest', userSchema);

// module.exports = mongoose.model('user', userSchema)