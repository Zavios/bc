require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cashbookModel = require('./models/cashbookModel')
const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authentication')

mongoose.connect(process.env.DATABASE_URI)
    .then(()=>{ console.log('Connected to Database');} )
    .catch( (err) => { console.error('error'); })

const db = mongoose.connection;

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/user',userRouter);
app.use('/auth',authRouter);

app.get('/', async (req,res) => {
    res.end('dwa')
})
app.post('/', async (req,res,next) => {
    const cashbook = await new cashbookModel({
        cashbookName: req.body.cashbookName,
        icon: req.body.icon,
        creditCategoryMap: req.body.creditCategoryMap,
    })
    try {
        const result = await cashbook.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.listen(process.env.PORT, () => {
    console.log('Brokecheck app is running');
    
})