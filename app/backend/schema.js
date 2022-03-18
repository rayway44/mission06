const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({});
const dataModel = mongoose.model('Products', dataSchema, 'products');
module.exports = dataModel;