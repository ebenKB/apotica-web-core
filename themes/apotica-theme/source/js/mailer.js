Email.send({
  Host : "smtp.office365.com",
  Username : "relay@apotica.net",
  Password : "Apotica@123",
  To : 'eakbo23@gmail.com',
  Username : "relay@apotica.net",
  From : "relay@apotica.net",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);