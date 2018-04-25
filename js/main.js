/*!
 * Main JavaScript
 * http://leanfj.github.io/
 *
 */

// muda bg menu

var menuTop = document.querySelector(".header-top");

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 100) {
    menuTop.classList.add('bg-menu');
  } else {
    menuTop.classList.remove('bg-menu');
  }
});

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 500) {
    $('.social-buttons').show('slow');
  } else {
    $('.social-buttons').hide('slow');    
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
});

// MODAL
$(document).ready(function(){
  $('#pagamento').click(function(){
    $('.pagamento').show("fast");
  })
  $('.fecha').click(function(){
    $('.pagamento').hide("fast")
  });
  $('#comprar').click(function(){
    $('.comprar').show("fast");
  })
  $('.fecha').click(function(){
    $('.comprar').hide("fast")
  });
  $('#envio').click(function(){
    $('.envio').show("fast");
  })
  $('.fecha').click(function(){
    $('.envio').hide("fast")
  });

  $(window).click(function (e) {
    var target = $(e.target);

    if (target.is('.modal')) {
      target.hide("slow");
    }
  });

});

//SLICK INICIALIZAR

$(document).ready(function () {

  $('.galeria-fotos').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
          
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
          
        }
      }
    ]
  });

  
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
          arrows: false
          
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

//FACEBOOK

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));