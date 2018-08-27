var showHideButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".nav__list");
// mainMenu.classList.toggle("show");
showHideButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mainMenu.classList.toggle("show");
})
// showHideButton.classList.toggle("open");
showHideButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  showHideButton.classList.toggle("open");
})
