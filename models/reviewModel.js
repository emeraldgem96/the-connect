const mongoose = require('mongoose');
const {Schema} = mongoose;

const reviewSchema = new Schema({

});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;