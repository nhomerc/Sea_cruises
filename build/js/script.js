var showHideButton=document.querySelector(".nav__button"),mainMenu=document.querySelector(".nav__list");showHideButton.addEventListener("click",function(e){e.preventDefault(),mainMenu.classList.toggle("show")}),document.addEventListener("keydown",function(e){e.preventDefault(),27==e.keyCode&&mainMenu.classList.remove("show")});