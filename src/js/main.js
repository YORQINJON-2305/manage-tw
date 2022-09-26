var elHeader = document.querySelector(".site-header");
var elBurger = document.querySelector(".burger");

elBurger.addEventListener("click", function(){
    elHeader.classList.toggle("show");
})
