const express = require('express')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')   

const router = express.Router()


const app = express()

const port = 5000 //CHANGE: What port would you like to run 

app.use(express.json())
app.use(cors())

        // Name of DATABASE you are trying to access
        const database = `property`
        
        // const uriRay = `mongodb+srv://${user}:${password}@cluster0.rw4si.mongodb.net/mission06-property?retryWrites=true&w=majority`
        const uri = `mongodb+srv://admin:raystu123@mission-6.kcvmu.mongodb.net/${database}?retryWrites=true&w=majority`
        // const uriRay = `mongodb+srv://${user}:${password}@cluster0.rw4si.mongodb.net/${database}?retryWrites=true&w=majority`
        
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
router.get('/',(req,res) => {

            documentPull.find({})
            .then((result) => {
                console.log(result)
                res.send(result)
            })
            .catch(err => { 
                console.log(err)
            })
})




// Backend API from LandingPage <<<<    
router.get('/listing/:property/:suburb/:rent/:bedroom/:bathroom', (req, res) => {
    

            const property = req.params.property
            
            const suburb = req.params.suburb
            const rent = req.params.rent
            const bedroom = req.params.bedroom
            const bathroom = req.params.bathroom
            
          const bedroomHolder =  parseInt(bedroom)
          const bathroomHolder = parseInt(bathroom)
            
            console.log(property, suburb, rent, bedroom, bathroom)

                    documentPull.find({property_type: property ,price:{$eq:rent }, suburb: suburb, bedroom_count: bedroomHolder, bathroom_count: bathroomHolder})
                    .then((result) => {
                        console.log(result)
                        res.send(result)
                    })
                    .catch(err => { 
                        console.log(err)
                    })

})

// Postman Testing endpoint
app.get('/hit',(req,res) => {

            const property = 'House'
            const city = "Auckland City"
            const suburb = ""
            const bedroom = 1
            const rent = '800'

            const query = `your query is - Property:${property}
            - city:${city}
            - suburb:${suburb}
            - rent:${rent}
            - bedroom:${bedroom}`
            
            console.log(query)

            const query01 = {property_type: property ,city: city ,suburb:suburb}

            documentPull.find({property_type: property ,city: city ,price:{$lte:rent}})
            .then((result) => {
                res.send(result)
            })
            .catch(err => { 
                console.log(err)
            })
})



// SEARCH: Here is where you can write your SEARCH QUERIES
router.get('/find',  (req,res) => {
    // documentPull.find({}).limit(10)
    // .then((result)) => {
    //     res.send(result)
    // } 
    // const quickSort = array => {
      
    //     if (array.length < 2) 
        
    //     return array;
    
    //     // console.log(array.length)
        
    //     let pivot = array[0];
    //     let left  = []; 
    //     let right = [];
    //     console.log(pivot)
    //     for (let i = 1 , total = array.length ; i < total; i++){
    //       if (array[i] < pivot) 
    //         left.push(array[i]);
    //        else 
    //         right.push(array[i]); 
    //     }
    //     return  [
    //       ...quickSort(left), 
    //       pivot, 
    //       ...quickSort(right)
    
    //     ];
        
    //   };

    
      
       
    // const result = quicksort(filteredData) 
    // res.send(result) 
    documentPull.find({}).limit(3)
    .then(result => {
        res.send((result))
        console.log(result)
    })


})

router.get('/find/:listing_id',(req,res) => {

    const listingId = req.params.listing_id
    const holder = parseInt(listingId)
   
    documentPull.find({listing_id: holder})
    .then((result) => {
        // console.log(result)
        res.send(result)
    })
    .catch(err => { 
        console.log(err)
    })



})

// app.listen(`${port}`, () => {
//     console.log(`you are listening on port ${port}`)
// })

module.exports = router