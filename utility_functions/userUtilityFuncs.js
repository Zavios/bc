const userModel = require('../models/userModel')

async function getRecord(req, res, next) {
    let record;
    try {
        record = await userModel.findById(res.param.id)
        if ( record != null ) {
            res.record = record
        } else { return res.status(404).json({ message: 'Record not found'}); }

    } catch (error) {
        res.status(500).json({message: err.message})
    }
    next();

}