const mongoose = require('mongoose');
const {Schema} = mongoose;

const reviewSchema = new Schema({
    review_title: {
        type: String,
        required: [true, 'A review title is required.'],
        maxlength: [50, 'Maximum length for the review title is 50 characters.']
    },
    review_comment: {
        type: String,
        required: [true, 'A review comment is required.'],
        minlength: [50, 'The minimum length of the comment is 50 characters.']
    },
    recommend: {
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;