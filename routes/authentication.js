const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const router = express.Router();

// const rateLimit = require('express-rate-limit');

const app = express();

// Middleware
app.use(express.json());

// Rate limiting for auth routes
// const authLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 5, // limit each IP to 5 requests per windowMs
//     message: 'Too many authentication attempts, please try again later.'
// });

router.post('/signup',async (req, res, next) => {
    const { userName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        // const accses_token = jwt.sign({ userName, email, })
        const newUser = new userModel({
            userName: userName,
            email: email,
            password: hashedPassword
        })
        await newUser.save();
        res.status(202).json( { message: "User created!" } )
    } catch (err) {
        res.status(500).json( { message: err.message } )
    }

}) 

//TODO: add login, accesstoken, login

router.get('/getall', async (req, res, next) => {
    try {
        const users = await userModel.find();
        if ( users != null ){ res.json(users) }
        else { res.json( { message: "No data" } )}
    } catch (error) {
        res.status(500).json( { message: err.message } )
    }
})





module.exports = router;