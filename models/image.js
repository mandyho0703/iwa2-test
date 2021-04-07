var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    filename: String,
    originalName: String,
    desc: String
},
{ timestamp: true});

module.exports = mongoose.model('Image', imageSchema);