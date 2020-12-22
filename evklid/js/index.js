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

/* Tab-content */
$( function() {
  $( "#tabs" ).tabs();
} );


/* Accordion */
$(function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    autoHeight: false
  });
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.questions__list-item-btn').addEventListener('click', function() {
    document.querySelector('.questions__list-item-btn').classList.toggle('active')
  });
})
