//click menu bars
//click event toggles ul (nav) appearance or disappearance



const navBar = document.querySelector("i");
console.log(navBar);


navBar.addEventListener("click", function(){

    // ulElement.style.display = "flex";
    let ulElement = document.querySelector("ul");
    ulElement.classList.toggle("navMenu");
    
    console.log(ulElement);
   

});

// ulElement.classList.toggle("navMenu");
// ulElement.classList.toggle("ul");