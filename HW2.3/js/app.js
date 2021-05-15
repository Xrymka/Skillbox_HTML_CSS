let tl1 = new gsap.timeline();
let tl2 = new gsap.timeline({paused: true});
let btnOpen = document.querySelector('.burger__btn');
let btnClose = document.querySelector('.close__btn');

tl1.from('.hero__title', {opacity: 0, y: 50, duration: 0.7})
  .from('.hero__btn', {opacity: 0, y: 50, duration: 0.7}, "-=0.7")
  .from('.hero__text', {opacity: 0, duration: 0.8})
  .from('#first', {opacity: 0, duration: 0.8}, "-=0.7")
  .from('#second', {opacity: 0, duration: 0.8}, "-=0.6")
  .from('#third', {opacity: 0, duration: 0.8}, "-=0.5")
  .from('.hero__author', {opacity: 0, duration: 0.8}, "-=0.7")

tl2.fromTo('.menu__top', {opacity: 0, y: -500}, {y: 0, opacity: 1, display: 'block', duration: 0.6})
  .fromTo('.menu', {opacity: 0, y: 150}, {y: 0, opacity: 1, display: 'block', duration: 0.6}, '-=0.5')
  .from('.menu__nav', {opacity: 0, y: 50, duration: 0.8})
  .from('.menu__social', {opacity: 0, y: 50, duration: 0.8}, '-=0.5')
  .from('.menu__right', {opacity: 0, y: 50, duration: 0.8}, '-=0.8');

btnOpen.addEventListener('click', function() {
  tl2.play();
})

btnClose.addEventListener('click', function() {
  tl2.reverse();
})
