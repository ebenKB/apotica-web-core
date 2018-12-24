alert("hey")

// humburger logic
document.getElementById('media-mob').addEventListener('click', () => {
  const burgerTop = document.getElementById('burger-top');
  const burgerMid = document.getElementById('burger-mid');
  const burgerDown = document.getElementById('burger-down');
  const mobileView = document.getElementById('mobile-container');

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
