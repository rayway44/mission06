
const express = require('express')
const router = express.Router()
const dataModel = require('./schema')

//all listings
router.get('/data', async (req, res) => {
    try {
        // const regex = /https:\/\/.*giphy.*\/media\/\w+\/giphy.gif\?cid=[a-f0-9]+&rid=giphy\.gif&ct=g/gi
       const products = await dataModel.find()
        res.send(products)
        console.log(products)
    } catch (err) {
        res.json({message: err.message})
    }
})


router.get('/data/:query', async (req, res) => {
    try {

       const query =req.params.query
       console.log(query)
       const products = await Products.find({suburbs:{suburbs}})
        res.send(products)
        console.log(products)

    } catch (err) {
        res.json({message: err.message})
    }
})

router.get('/datas/:query', (req, res) => {

       const query =req.params.query
       console.log(query)
    //    const products = Products.find({suburbs:{suburbs}, bedrooms:{bedrooms}, bathrooms:{bathrooms}})
        // res.send(products)
        // console.log(products)
        
    
})


router.get('/test', (req, res) => {
    res.send('testing')
})


module.exports = router