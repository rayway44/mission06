const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express()
const port = 5000 //CHANGE: What port would you like to run 

        const user = process.env.DB_USERNAME
        const password = process.env.DB_PASSWORD

        // Name of DATABASE you are trying to access
        const database = `property`
        
        // const uriRay = `mongodb+srv://${user}:${password}@cluster0.rw4si.mongodb.net/mission06-property?retryWrites=true&w=majority`
        const uri = `mongodb+srv://admin:raystu123@mission-6.kcvmu.mongodb.net/${database}?retryWrites=true&w=majority`
        const uriRay = `mongodb+srv://${user}:${password}@cluster0.rw4si.mongodb.net/${database}?retryWrites=true&w=majority`
        
        // Create connectin to MongoDB
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })      
        
        // Test connection
        mongoose.connection.on('connected', ()=>{
            console.log('you are connected MONGO server')
        })
        
        // Name of COLLECTION you are trying to access
        let collection = `products`

        // Create New Schema
        const Schema = mongoose.Schema;

        // Creates empty Schema to pull Collection
        const deafaultSchema = new Schema({})

        // Creates a new Mongoose model where it gets data from collectiom and places it in defaultSchema
        const documentPull = mongoose.model(collection, deafaultSchema)


// Listing all DOCUMENTS from database - DO NOT CHANGE
app.get('/',(req,res) => {

            documentPull.find({})
            .then((result) => {
                console.log(result)
                res.send(result)
            })
            .catch(err => { 
                console.log(err)
            })
})

// SEARCH: Here is where you can write your SEARCH QUERIES
app.get('/find',(req,res) => {

            const bedroom = req.params.bedroom
            const priceLow = '800'
            const priceHigh = '1,475'
            // 1,475

            documentPull.find({price: {$gte: priceLow}}).limit().sort({price:-1})
            .then((result) => {
                // console.log(result)
                res.send(result)
            })
            .catch(err => { 
                console.log(err)
            })
    

})

app.listen(`${port}`, () => {
    console.log(`you are listening on port ${port}`)
})