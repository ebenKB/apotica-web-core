Email.send({
  Host : "smtp.office365.com",
  Username : "relay@apotica.net",
  Password : "Apotica@123",
  To : 'them@website.com',
  From : "you@isp.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);