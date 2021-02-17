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
    // const inputElement = document.getElementsByClassName("message");
    const inputElement = document.getElementById("message");
    // const userInfo = inputElement.value;

    userMessage = inputElement.value;
    console.log(userMessage);

    if (userMessage) {
        alert("Thank you for submitting a form!");
        inputElement.value = "";
        const userName = document.getElementById("name");
        userName.value = "";
        const userEmail = document.getElementById("userEmail");
        userEmail.value = "";
    }
    
});

