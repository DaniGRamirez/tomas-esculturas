const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser')


console.log("test mail");
var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {           
        user: 'tomasgr.escultura@gmail.com',
        pass: 'hornocaido'
    }
});       

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/api/contacto/',function(req,res,next){
  console.log("Function api in server");
      var mailOptions = {
        from: '"Dani 👻" <danigramirez27@gmail.com>', // sender address
        to: 'tomasgr.escultura@gmail.com', // list of receivers
        subject: 'Prueba email dani ✔', // Subject line
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
        console.log("Llamada a server correcta");
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);

