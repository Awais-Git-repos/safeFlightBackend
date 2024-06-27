const mongoose = require('mongoose');
const { Schema } = mongoose

const packagesSchema = mongoose.Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    price: {
        type: Number,
        required: true
    },
    base_price: {
        type: Number,
        required: true
    },
    accounts: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('package', packagesSchema)
