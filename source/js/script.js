var showHideButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".nav__list");
var showPopUpButton = document.querySelector(".catalog__button");
var popUp = document.querySelector(".catalog-popup");
var closePopUp = document.querySelector(".catalog-popup__button");
var layer = document.querySelector(".overlay");
showHideButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mainMenu.classList.toggle("show");
})

document.addEventListener("keydown", function(e) {
  e.preventDefault();
  if(e.keyCode == 27) mainMenu.classList.remove("show");
})
showPopUpButton.addEventListener("click", function(pop) {
  pop.preventDefault();
  popUp.classList.add("show");
  layer.style.display = "block";
})
closePopUp.addEventListener("click", function(close) {
  popUp.classList.remove("show");
  layer.style.display = "none";
})

