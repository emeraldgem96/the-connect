const mongoose = require('mongoose');
const {Schema} = mongoose;

const reviewSchema = new Schema({
    review_title: String,
    review_comment: String,
    rating: Number,
    recommend: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;