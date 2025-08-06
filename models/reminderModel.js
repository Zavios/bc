const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    reminderTitle: {
        type: String,
        required: true
    },
    reminderSubtext: {
        type: String,
        default: "Monthly subscription"
    },
    remiderAmount: {
        type: Number,
        required: true
    },
    reminderStartDate: {
        type: Date,
        default: Date.now
    },
    reminderEndDate: {
        type: Date,
        required: true
    }
}, { timestamps: true }
)

module.exports = mongoose.model('reminders',reminderSchema)