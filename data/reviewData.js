const { v4:uuid } = require('uuid');

module.exports = [
    {
        _id: uuid(),
        review_title: 'Worth the Hype',
        review_comment: "Slutty Vegan was delicious, the fries were fresh and well-seasoned. The Fussy Hussy was cooked to perfection! The Slutty Sauce really set it off! Lil late on the hype train, but I def recommend if you haven't tried it already.",
        rating: 4,
        recommend: 'Yes'
    },
    {
        _id: uuid(),
        review_title: 'A Whole Heaux for this spot!',
        review_comment: "I had the Fussy Hussy, a great deal on Uber Eats, and I was changed forever. First the fries were hot and seasoned well. Second, I couldn't even tell the difference between a beef patty and this vegan burger. I'm going back with the quickness.",
        rating: 5,
        recommend: 'Yes'
    }
]