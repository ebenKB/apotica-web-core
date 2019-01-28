// humburger
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

// scroll positions
let last_known_scroll_position = 0;
let current_pos = last_known_scroll_position;
let ticking = false;

function toggleHeader(current, previous) {

  if(current > previous) {
    //scroll-down
    document.getElementById('contact-header').classList.add('hide');

  }else if(previous > current) {
    //scroll up
    document.getElementById('contact-header').classList.remove('hide');
  }
}

// detect scroll
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = current_pos;
  current_pos = window.scrollY;
  if(!ticking) {
    window.requestAnimationFrame(function() {
      toggleHeader(current_pos, last_known_scroll_position);
      ticking=false;
    });
    ticking = true;
  }
})