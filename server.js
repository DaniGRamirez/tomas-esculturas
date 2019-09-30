const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
//let testAccount = await nodemailer.createTestAccount();

var smtpTransport = nodemailer.createTransport({
    host: 'gmail',
    secure: true,
    auth: {           
        user: 'tomasgr.escultura@gmail.com',
        pass: 'hornocaido'
    }
});

var mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'tomasgr.escultura@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };
        

  smtpTransport.sendMail(mailOptions, function(error){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }       
  });          


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

// async..await is not allowed in global scope, must use a wrapper
