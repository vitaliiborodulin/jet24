if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  preloader.classList.add('preloader-hidden');
  
  setTimeout(() => {
    preloader.remove();
  }, 500);

  $(function() {

     //= components/parallax
     //= components/menu
     //= components/overlay
     //= components/slider
     //= components/form
     //= components/popup
     //= components/scrollBtn

  });

});








