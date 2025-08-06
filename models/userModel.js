const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // userAccessToken: {
    //     type: String,
    //     required: true
    // },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

module.exports = mongoose.model('users',userSchema);