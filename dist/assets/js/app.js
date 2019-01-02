"use strict";

// humburger logic
document.getElementById('media-mob').addEventListener('click', function () {
  var burgerTop = document.getElementById('burger-top');
  var burgerMid = document.getElementById('burger-mid');
  var burgerDown = document.getElementById('burger-down');
  var mobileView = document.getElementById('mobile-container');
  burgerTop.classList.toggle('burger-top-rotate');
  burgerDown.classList.toggle('burger-down-rotate');
  burgerMid.classList.toggle('hide');
  mobileView.classList.toggle('hide');

  if (burgerTop.classList.contains('burger-top-rotate')) {
    burgerDown.classList.add('green');
    burgerTop.classList.add('green');
  } else {
    burgerDown.style.backgroundColor = '#fff';
    burgerTop.style.backgroundColor = '#fff';
  }
});