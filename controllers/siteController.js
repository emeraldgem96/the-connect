const { request } = require("express");

module.exports = {
    index: (request, response) => {
        response.render('pages/index');
    }
}