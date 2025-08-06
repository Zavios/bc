const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    cashbookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cashbooks',
        required: true
    },
    entryTitle: {
        type: String,
        required: true
    },
    entryAmount: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        default: "Cash"
    },
    tags: {
        type: [String],
        default: []
    }
}, { timestamps: true }
)

module.exports = mongoose.model('entries',entrySchema)