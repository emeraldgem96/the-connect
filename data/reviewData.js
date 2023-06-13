const { v4:uuid } = require('uuid');

module.exports = [
    {
        _id: uuid(),
        business_name: "Slutty Vegan",
        business_address: "2045 Pleasant Hill Rd, Duluth, GA 30096", 
        website:"https://sluttyveganatl.com/", 
        category: "food", 
        rating: 4, 
        review_title: "Worth the Hype", 
        review_blurb: "Slutty Vegan was delicious, the fries were fresh and well-seasoned. The Fussy Hussy was cooked to perfection! The Slutty Sauce really set it off! Lil late on the hype train, but I def recommend if you haven't tried it already.", 
        recommend: "Yes"
    },
    {
        _id: uuid(),
        business_name: "Slutty Vegan",
        business_address: "2045 Pleasant Hill Rd, Duluth, GA 30096", 
        website:"https://sluttyveganatl.com/", 
        category: "food", 
        rating: 5,
        review_title: 'A Whole Heaux for this spot!',
        review_comment: "I had the Fussy Hussy, a great deal on Uber Eats, and I was changed forever. First the fries were hot and seasoned well. Second, I couldn't even tell the difference between a beef patty and this vegan burger. I'm going back with the quickness.",
        rating: 5,
        recommend: 'Yes'
    }
] 
