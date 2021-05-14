let tl = new gsap.timeline({paused: true});
let btnOpen = document.querySelector('.burger__btn');
let btnClose = document.querySelector('.close__btn');


tl.fromTo('.menu__top', {opacity: 0, y: -500}, {y: 0, opacity: 1, display: 'block', duration: 0.6})
  .fromTo('.menu', {opacity: 0, y: 150}, {y: 0, opacity: 1, display: 'block', duration: 0.6}, '-=0.5')
  .from('.menu__nav', {opacity: 0, y: 50, duration: 0.8})
  .from('.menu__social', {opacity: 0, y: 50, duration: 0.8}, '-=0.5')
  .from('.menu__right', {opacity: 0, y: 50, duration: 0.8}, '-=0.8');

btnOpen.addEventListener('click', function() {
  tl.play();
})

btnClose.addEventListener('click', function() {
  tl.reverse();
})
