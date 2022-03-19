const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({});
const dataModel = mongoose.model('property', dataSchema, 'products');
module.exports = dataModel;