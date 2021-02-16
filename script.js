//click menu bars
//click event toggles ul (nav) appearance or disappearance

const navBar = document.querySelector("i");

navBar.addEventListener("click", function(){

    let ulElement = document.querySelector("ul");
    ulElement.classList.toggle("navMenu");
    
});

//Form submission 

const formElement = document.querySelectorAll("form");

console.log(formElement);

formElement.addEventListener("submit", function(event){
    console.log("form is submitted");
    event.preventDefault();
    const inputElement = document.querySelectorAll("input");
    const userInfo = inputElement.value;
    console.log(userInfo);
});

