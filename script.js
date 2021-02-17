//Menu button
const navBar = document.querySelector("i");

navBar.addEventListener("click", function(){

    let ulElement = document.querySelector("ul");
    ulElement.classList.toggle("navMenu");
    
});

//Form submission 

const formElement = document.querySelector("form");

console.log(formElement);



formElement.addEventListener("submit", function(event){
    console.log("form is submitted");
    event.preventDefault();
    const inputElement = document.getElementById("message");

    userMessage = inputElement.value;
    console.log(userMessage);

    const clearField = function(target){
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

