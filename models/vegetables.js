const mongoose = require('mongoose')


//set up the data structure
//A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.
const vegetableSchema = new mongoose.Schema({
 name:{ type : String, require: true},
 color: {type: String, require: true},
 readyToEat: Boolean
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

module.exports = Vegetable