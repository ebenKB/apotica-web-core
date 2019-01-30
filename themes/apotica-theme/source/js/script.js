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

// accordion menu /privacy
var acc = document.getElementsByClassName("card-link");
// var trigger = document.querySelector(".card-expand");

var i;

for (i = 0; i < acc.length; i++) {
//  console.log(acc[i].nextElementSibling )
 acc[i].addEventListener("click", function() {
   /* Toggle between adding and removing the "active" class,
   to highlight the button that controls the panel */
   this.classList.toggle("active");


   /* Toggle between hiding and showing the active panel */
   var panel = this.nextElementSibling;
   var panelActive = this.firstElementChild;
  // console.log(this.firstElementChild)

   if (panel.style.display === "block") {
     panel.style.display = "none";
     panelActive.classList.add("card-expand");
     panelActive.classList.remove("card-minimize");
   } else {
     panel.style.display = "block";
     panelActive.classList.remove("card-expand");
     panelActive.classList.add("card-minimize");
    }
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

 });
}