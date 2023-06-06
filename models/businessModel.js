const mongoose = require('mongoose');
const {Schema} = mongoose;

const businessSchema = new Schema({

});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;