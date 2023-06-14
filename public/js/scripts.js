const { response } = require("express");

function createAccount() {
    let formSign = document.getElementById("signupForm");
    if (formSign.style.display === "none") {
        formSign.style.display = "block";
    } else {
        formSign.style.display = "none";
    }
}

createAccount();

function blockedButton() {
    let block;
    if(confirm('This is out of service. Please login or create an account to create a review.')) {
        alert(block = 'Thank you!')
    }
    document.getElementById('blocked-button').disabled = true;
}

blockedButton();