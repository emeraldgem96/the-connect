const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const path = require('node:path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.render('pages/index');
});

app.get('/login', (request, response) => {
    response.render('pages/login');
});

app.get('/reviews', (request, response) => {
    response.render('pages/reviews');
});

app.get('/create-review', (request, response) => {
    response.render('pages/create-review');
});

app.get('/category-food', (request, response) => {
    response.render('pages/category-food');
});

app.get('/category-retail', (request, response) => {
    response.render('pages/category-retail');
});

app.get('/review-slutty-vegan', (request, response) => {
    response.render('pages/review-slutty-vegan');
});

app.get('/review-nourish-and-bloom', (request, response) => {
    response.render('pages/review-nourish-and-bloom');
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});