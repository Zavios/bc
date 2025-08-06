const mongoose = require('mongoose');

const cashbookSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true
    },
    cashbookName: {
        type: String,
        required: true, 
    },

    creditCategoryMap:{
        type:Map,
    },

    debitCategoryMap:{
        type:Map,
        of:Number,
    },

    icon: {
        type:Number
    },

    ifFav: {
        type: Boolean,
    },

    totalAmount: {
        type: Number,
        default:0,
    },

    totalCredit: {
        type: Number,
        default:0,
    },

    totaldebit: {
        type: Number,
        default:0,
    }
    
},
{timestamps:true})

module.exports = mongoose.model('cashbooks',cashbookSchema);