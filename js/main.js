// muma bg menu

var menuTop = document.querySelector(".header-top");

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 100) {
    menuTop.classList.add('bg-menu');
  } else {
    menuTop.classList.remove('bg-menu');
  }
});


// Esconde link menu

var menu = document.getElementsByClassName("menu")[0];
var toggleMenu = document.getElementById("toggle-menu");

window.addEventListener('resize', function () {
  var tamanhoTela = document.getElementsByTagName("html")[0].clientWidth;
  if (tamanhoTela < 658) {
    menu.classList.add('hide-menu');
    toggleMenu.classList.add('toggle-show');
  } else {
    menu.classList.remove('hide-menu');
    toggleMenu.classList.remove('toggle-show');
    
  }
  
});



toggleMenu.addEventListener('click', function (e) {
  if (menu.classList[1] == "hide-menu") {
    menu.classList.remove('hide-menu');
    menu.classList.add('show-menu');
  } else {
    menu.classList.add('hide-menu');
    menu.classList.remove('show-menu');
    
    
  }
})