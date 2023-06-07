const { v4:uuid } = require('uuid');

module.exports = [
    {
        _id: uuid(),
        business_name: 'Slutty Vegan',
        category: 'Food',
        description: 'Veganized American classics like burgers and fries with Southern delicacies like sweet potato pie and banana pudding.',
        location: '2045 Pleasant Hill Rd, Duluth, GA 30096',
        website: 'https://sluttyveganatl.com/'
    },
    {
        _id: uuid(),
        business_name: 'Nourish + Bloom Market',
        description: 'Convenient and healthy foods from local sources that is available 24/7/365, since the store is completely autonomous (shopping, vending, and robotic delivery)',
        location: '300 Trilith Parkway Suite 250, Fayetteville, GA 30214',
        website: 'https://www.nourishandbloommarket.com/'
    }
]