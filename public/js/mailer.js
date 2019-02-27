(function(){
  emailjs.init("user_BitlFtyfkTJwLUCehZvke");
})();

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

    $('#submit').text("Sending Message ...");

    document.getElementById('submit').setAttribute("disabled", "disabled");

    emailjs.sendForm('apotica', 'contact_us', this)
      .then((data) => {
        if (data.status == '200') {
          $('#sales-container').addClass('hide');
          $('#success-banner').removeClass('hide');
          $('#success-banner').addClass('swipeFromLeft')
        }
      })
      .catch((err) =>{
        console.log("an error occured while sending mail")
      })
});
}
}

