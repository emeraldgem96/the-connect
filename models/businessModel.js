const mongoose = require('mongoose');
const {Schema} = mongoose;

const businessSchema = new Schema({
    business_name: String,
    category: String,
    description: String,
    location: String,
    website: String
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;