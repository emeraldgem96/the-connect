const mongoose = require('mongoose');
const {Schema} = mongoose;

const reviewSchema = new Schema({
    business_name: {
        type: String,
        required: [true, 'A business name is required.'],
        minlength: [1, 'Minimun length for the business\'s name is 1 character.']
    },
    business_address: {
        type: String,
        required: [true, 'An address is required.'],
        minlength: [5, 'Minimum length for the location is 5 characters.']
    },
    website: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: [true, 'The rating is required.'],
        min: [1, 'Minimun number of rating is 1']
    },
    review_title: {
        type: String,
        required: [true, 'A review title is required.'],
        maxlength: [50, 'Maximum length for the review title is 50 characters.']
    },
    review_blurb: {
        type: String,
        required: [true, 'A review blurb is required.'],
        minlength: [50, 'The minimum length of your blurb is 50 characters.']
    },
    recommend: {
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;