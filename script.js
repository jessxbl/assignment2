//Menu button
const navBar = document.querySelector("i");

navBar.addEventListener("click", function () {

    let ulElement = document.querySelector("ul");
    ulElement.classList.toggle("navMenu");

});

//Form submission 

const formElement = document.querySelector("form");




formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputElement = document.getElementById("message");

    userMessage = inputElement.value;

    const clearField = function (target) {
        target.value = "";
    }

    if (userMessage) {
        alert("Thank you for submitting a form!");
        const userName = document.getElementById("name");
        const userEmail = document.getElementById("userEmail");
        clearField(inputElement);
        clearField(userName);
        clearField(userEmail);
    }

});
