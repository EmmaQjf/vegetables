//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. 
//
// The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code. It allows you to create environment variables in a . env file instead of putting them in your code.
require('dotenv').config()
const express = require('express')

//The main job of the View Engine is to compile components and templates into a set of instructions that can be understood and rendered by the browser.
const jsxEngine = require('jsx-view-engine')
const mongoose = require('mongoose')
const Vegetable = require('./models/vegetables')// why need ./?
const PORT = process.env.PORT || 3000

const app = express()



//connect to mongoDB
//process.env so you can read and write in the database
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open',() => {
    console.log('connected to mongoDB')
})

//MIDDLEWARE 
app.use(express.urlencoded({extended: true}))

//set up view engine
//view engine, the template engine to use. 
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())



//INDEX
app.get('/vegetables', async(req, res) => {
    try {
        const foundVegetables = await Vegetable.find({})
        res.render('vegetables/Index',{
            vegetables: foundVegetables
        })
    } catch(error) {
        res.status(400).send({message: error.message})
    }
    
})
//NEW Route
app.get('/vegetables/new', (req, res) => {
    // render untimatly looks for the views folder 
    res.render('vegetables/New')
})
//DELETE -- 
//UPDATE ==put/patch

//CREATE
app.post('/vegetables',async (req, res) => {
    //req.body is the object about user' input { name: 'Spinach', color: 'green' }
    // console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
    const createdVegetable = await Vegetable.create(req.body)
    res.send(createdVegetable)
    // res.redirect(`/vegetables/${createdVegetable._id}`)
    } catch(error) {
    res.status(400).send({message: error.message}) 
    }
})
//EDIT
//SHOW
   app.get('/vegetables/:id', async (req, res) => {
    try {
        const foundVegetable = await Vegetable.findOne({_id: req.params.id})
        res.render('vegetables/Show',{
            vegetable: foundVegetable
        })

    } catch(error) {
        res.status(400).send({message: error.message})

    }
    
   })

app.listen (3000, () => {
    console.log(`${PORT} is working`)
})
