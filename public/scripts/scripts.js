function createAccount() {
    let formSign = document.getElementById("signupForm");
    if (formSign.style.display === "none") {
        formSign.style.display = "block";
    } else {
        formSign.style.display = "none";
    }
}

createAccount();