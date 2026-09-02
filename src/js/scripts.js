window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  preloader.classList.add('preloader-hidden');
  document.body.classList.remove('no-scroll');
  
  setTimeout(() => {
    preloader.remove();
  }, 500);

});

// fallback
setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (!preloader.classList.contains('preloader-hidden')) {
    preloader.classList.add('preloader-hidden');
    document.body.classList.remove('no-scroll');
  }
}, 5000);

$(function() {

    //= components/parallax
    //= components/menu
    //= components/overlay
    //= components/slider
    //= components/form
    //= components/popup
    //= components/scrollBtn

});








