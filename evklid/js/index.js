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
// $( function() {
//   $( "#tabs" ).tabs();
// } );

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work__list-item').forEach(function(tabsBtn) {

    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work__left').forEach(function(tabContent) {
        tabContent.classList.remove('work__left-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work__left-active')
    })
  })
})


/* Accordion */
$(function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    // icons: { "header": "plus", "activeHeader": "minus" }
  });
});




// questions__list-item-icon::after {
//   transform: rotate(45deg) translateX(1px);
// }

// questions__list-item-icon::before {
//   transform: rotate(45deg) translate(-10px, -10px);
// }
