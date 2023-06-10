require('dotenv').config();
const express = require('express');
const app = express();
// require passport and session
const session = require('express-session');
const passport = require('passport');
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const path = require('node:path');
const methodOverride = require('method-override');
const routes = require('./routes/index');

app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))
// need to reference the params of secret, resave, and saveUninitialized
app.use('/', routes);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());
// initialized passport
// passport to use session


// app.get('/reviews', (request, response) => {
//     response.render('pages/reviews');
// });

// app.get('/create-review', (request, response) => {
//     response.render('pages/create-review');
// });

// app.get('/category-food', (request, response) => {
//     response.render('pages/category-food');
// });

// app.get('/category-retail', (request, response) => {
//     response.render('pages/category-retail');
// });

// app.get('/review-slutty-vegan', (request, response) => {
//     response.render('pages/review-slutty-vegan');
// });

// app.get('/review-nourish-and-bloom', (request, response) => {
//     response.render('pages/review-nourish-and-bloom');
// });

// Server

require('./config/connection')

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});