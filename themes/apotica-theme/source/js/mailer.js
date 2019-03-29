$('document').ready(function(){
  (function(){
    emailjs.init("user_BitlFtyfkTJwLUCehZvke");
  })();
});

window.onload = function() {
  // validate form when the user tries to submit
  const submitbtn = document.getElementById('submit');

  if(submitbtn !=null) {
    submitbtn.addEventListener('click', () => {
      const form = document.getElementById('sales-form');
      form.classList.add('validate');
    });
  }

// SEND form
const form = document.getElementById('sales-form');
if (form != null) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const btnText = $('#submit').text();
    $('#submit').text("Sending Message ...");
    document.getElementById('submit').setAttribute("disabled", "disabled");

    emailjs.sendForm('apotica', 'contact_us', this)
      .then((data) => {
        if (data.status == '200') {
          showStatus(btnText);
          const campaignContainer=document.getElementById('campaign-container');
          if(campaignContainer != null) {
            campaignContainer.style.gridTemplateColumns = "1fr";
          
            // scroll to the top of the page
            scroll();
          }
        }
      })
      .catch(() =>{
        alert("an error occured while sending mail");
      })
});
}
}

function showStatus(btnText){
  $('#sales-container').addClass('hide');
  $('#success-banner').removeClass('hide');
  $('#success-banner').addClass('swipeFromLeft')
  $('#submit').text(btnText);
}

function scroll(){
  $('html, body').animate({
    scrollTop: $('#home').offset().top
  }, 800);
}