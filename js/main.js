var menuTop = document.querySelector(".header-top");

window.addEventListener('scroll', function (e) {
  if (window.scrollY > 100) {
    menuTop.classList.add('bg-menu');
  } else {
    menuTop.classList.remove('bg-menu');
  }
});
