// humburger
document.getElementById('media-mob').addEventListener('click', () => {
  const burgerTop = document.getElementById('burger-top');
  const burgerMid = document.getElementById('burger-mid');
  const burgerDown = document.getElementById('burger-down');
  const mobileView = document.getElementById('menu');


  burgerTop.classList.toggle('burger-top-rotate');
  burgerDown.classList.toggle('burger-down-rotate');

  burgerMid.classList.toggle('hide');
  mobileView.classList.remove('menu-toggle');
  // mobileView.classList.toggle('hide');
  mobileView.classList.toggle('grid-block');
  // document.getElementsByClassName('nav-menu-content')[0].style="display: none";

  if (burgerTop.classList.contains('burger-top-rotate')) {
    // burgerDown.classList.add('green');
    // burgerTop.classList.add('green');
    // document.getElementsByClassName('nav-menu-content')[0].style="display: block";

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
  // console.log("toggle header:", 'current:', current, "last", last_known_scroll_position)
  if(current == 0) {
    document.getElementById('contact-header').classList.remove('fadeout');
    document.getElementById('contact-header').classList.remove('hide');
  } else if(current > previous) {
    //scroll-down
    if(current >= 100) {
      // show floating button
      if (current >= 700) {
        document.getElementById('float-btn').classList.remove('hide')
      } else {
        document.getElementById('float-btn').classList.add('hide')
      }
      document.getElementById('contact-header').classList.add('fadeout');
        setTimeout(() => {
          if(current >= 100) {
            document.getElementById('contact-header').classList.add('hide');
          }
        }, 300);
    }
  } else if(previous >= current) { //scroll up
    // hide the floating button 
    if (current <= 300) {
      document.getElementById('float-btn').classList.add('hide');
    }
    if(current == 0) {
      document.getElementById('contact-header').classList.remove('fadeout');
      document.getElementById('contact-header').classList.remove('hide');
    }
  }

  // check for end of scroll
  setTimeout(() => {
    // revert to the previous state
    if(current ==0) {
      document.getElementById('contact-header').classList.remove('fadeout');
      document.getElementById('contact-header').classList.remove('hide');
    }
  }, 200);
}

// detect scroll
window.addEventListener('scroll', function() {
  last_known_scroll_position = current_pos;
  current_pos = window.scrollY;
    window.requestAnimationFrame(function() {
      toggleHeader(current_pos, last_known_scroll_position);
    });
});

// -old working version
// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = current_pos;
//   current_pos = window.scrollY;
//   if(!ticking) {
//     window.requestAnimationFrame(function() {
//       toggleHeader(current_pos, last_known_scroll_position);
//       ticking=false;
//     });
//     ticking = true;
//   }
// });

// accordion menu /privacy
let acc = document.getElementsByClassName("card-link");

let i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
   /* Toggle between adding and removing the "active" class,
   to highlight the button that controls the panel */
   this.classList.toggle("active");


   /* Toggle between hiding and showing the active panel */
   let panel = this.nextElementSibling;
   let panelActive = this.firstElementChild;

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

$("document").ready(function() {
  // add scroll for all scrollable containers
  scroll('endpoint', 'endpoint_security', 800);
  scroll('network', 'network_security', 1000);
  scroll('application', 'application_security', 1500);
  scroll('security', 'security_services', 1650);

  scroll('netK', 'networking', 800);
  scroll('manage', 'data_management', 1200);
  scroll('data', 'data_center', 1500);
  scroll('to-media-mob', 'media-probe', 1000);

  // cloud infrastructure
  scroll('business', 'business_productivity', 800);
  scroll('enterprise', 'enterprise_security', 1000);

  scroll('top','', 1000);

  //floating button
  scroll('float-btn', 'home', 1000)
});

function scroll(id, to, delay) {
  $('#'+id).click(() =>{
    $('html, body').animate({
      scrollTop: $('#'+to).offset().top
    }, delay)
  });
}
