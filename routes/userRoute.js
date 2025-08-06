const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')
// import { getRecord } from '../utility_functions/userUtilityFuncs'

router.get('/',async (req, res, next) => {
    try {
        const data = await userModel.find();
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})



router.get('/getuser/:id', getRecord, async (req, res, next) => {
    const data = res.record;
    res.status(200).json(data);
})

router.post('/createuser', async (req, res, next) => {
    const newUser = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        isEmailVerified: req.body.isEmailVerified
        
    })
    try {
        const result = await newUser.save();
        res.status(200).json(
            { message: "User successfully created" }
        )
    } catch (error) {
        res.status(499).json(
            { message: error.message }
        )
    }
})

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

module.exports = router;