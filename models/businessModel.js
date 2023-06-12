const mongoose = require('mongoose');
const {Schema} = mongoose;

const businessSchema = new Schema({
    business_name: {
        type: String,
        required: [true, 'A business name is required.'],
        minlength: [1, 'Minimun length for the business\'s name is 1 character.']
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: [true, 'A description is required.'],
        minlength: [5, 'Minimum length for the description is 5 characters.']
    },
    location_address: {
        type: String,
        required: [true, 'An address is required.'],
        minlength: [5, 'Minimum length for the location is 5 characters.']
    },
    location_city: {
        type: String,
        required: [true, 'A city and state is required.'],
        minlength: [5, 'Minimum length for the city and state is 5 characters.']
    }, 
    website: String
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;