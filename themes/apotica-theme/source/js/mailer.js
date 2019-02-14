Email.send({

  UseDefaultCredentials: false,
  Host : "smtp.office365.com",
  ssl:true,
  tls:true,
  port:587,
  Username : "relay@apotica.net",
  Password : "Apotica@123",
  To : 'web@apotica.net',
  Username : "relay@apotica.net",
  From : "relay@apotica.net",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);