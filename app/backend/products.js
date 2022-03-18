
const mongoose = require('mongoose')


const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required:true
    },
    bathrooms:{
        type: Number,
        required:true

    
    },
    bedrooms:{
        type: Number
    },
    garage:{
        type: Boolean
    },
    price:{
        type: Number
    },
    property:{
        type: String
    },
    purchase_type:{
        type: String
    },
    suburbs:{
        type: String
    },
    image:{
        type: String
    },
    


})

module.exports = mongoose.model('Products', productsSchema)