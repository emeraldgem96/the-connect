// const { response } = require("express");

// Hide/Unhide Create Account button
function createAccount() {
    let formSign = document.getElementById("signupForm");
    if (formSign.style.display === "none") {
        formSign.style.display = "block";
    } else {
        formSign.style.display = "none";
    }
}

// createAccount();

// Blocked button for create review on reviews page
function blockedButton() {
    let block;
    if(confirm('This is out of service. Please login or create an account to create a review.')) {
        alert(block = 'Thank you!')
    }
    document.getElementById('blocked-button').disabled = true;
}

// blockedButton();

// Password Protected button
function checkPassword() {
    let password = prompt("CREATOR ONLY! Please enter the password to access this page.");
    if (password === 'creatorImani96') {
        alert('Password is correct. Access granted!');
        window.location = "/admin/change-review"
    } else {
        alert('Incorrect password. Access denied!');
        window.location = "/admin"
    }
}

// checkPassword();

let myButton = document.getElementById("myButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}