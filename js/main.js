/*!
 * Main JavaScript
 * http://leanfj.github.io/
 *
 */

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


//SLICK INICIALIZAR

  

$('.mensagens').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1105,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});