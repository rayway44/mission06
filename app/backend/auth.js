
const express = require('express')
const router = express.Router()
const dataModel = require('./schema')

//all listings
router.get('/data', async (req, res) => {
    try {
    
        const products = await dataModel.find()
        res.send(products)
        console.log(products)
        
    } catch (err) {
        res.json({message: err.message})
    }
})





module.exports = router