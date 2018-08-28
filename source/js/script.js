var showHideButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".nav__list");
showHideButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mainMenu.classList.toggle("show");
})

document.addEventListener("keydown", function(e) {
  e.preventDefault();
  if(e.keyCode == 27) mainMenu.classList.remove("show");
})

