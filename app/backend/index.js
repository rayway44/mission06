
const express = require('express')
const mongoose = require('mongoose')
const {MONGO_URI} = require('./db')
const cors = require('cors')
const auth = require ('./auth.js')

const app = express();


app.use(express.json())
app.use(cors());


app.use('/', auth)



mongoose.connect(MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Mongodb konecs'))
    .catch(err => console.log(err))



app.listen(4000, function() {
    console.log('listening on 4000')
  })