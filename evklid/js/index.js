/* Burger menu */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger').classList.toggle('active'),
    document.querySelector('#nav').classList.toggle('is-active')
  });
})

/* Swiper */
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoHeight: true,
});

/* Accordion */
$(function() {
  $( "#accordion" ).accordion();
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.questions__list-item-btn').addEventListener('click', function() {
    document.querySelector('.questions__list-item-btn').classList.toggle('active')
  });
})
