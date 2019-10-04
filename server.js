const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser')


const oauth2Client = new OAuth2(
  '825503344034-ejv83of9mmmihot31f1b1r4b1r4gtnmb.apps.googleusercontent.com', // ClientID
  'zkGWBMYJ4xUCE_RQoDTEeVW4', // Client Secret
  // "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1/vVASjgmg9vn7Cm4ZrLvUMXD__jaorFPD5IDknrx3sqw"
});

console.log(oauth2Client);
const accessToken = oauth2Client.getAccessToken();

// console.log(accessToken);

let transporterToken = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      user: 'tomasgr.escultura@gmail.com',
      clientId: '825503344034-ejv83of9mmmihot31f1b1r4b1r4gtnmb.apps.googleusercontent.com',
      clientSecret: 'zkGWBMYJ4xUCE_RQoDTEeVW4',
      refreshToken: '1/vVASjgmg9vn7Cm4ZrLvUMXD__jaorFPD5IDknrx3sqw',
      // accessToken: 'ya29.Il-UB1thoateU9n-x4DFmJ0lD2JY4p1tR56zorcNlWhckkyXcyCvlwzkLGRjX-kr4eEk2HISyTpC2oMyt9B6cvB6M39yZaDZt3TTGfNVyNi6yPo73VzSK7RtrZYy-iFnlA',
      // expires: 1484314697598
  }
});

var mailOptionsToken = {
  from: `dani`, // sender address
  to: 'tomasgr.escultura@gmail.com', // list of receivers
  subject: `Formulario web - Test token`, // Subject line       
  html: ` mensaje enviado desde:`, // plain text body       
  replyTo:`NONE`,
};      


transporterToken.sendMail(mailOptionsToken,function(error){
  console.log("Email acces-token");
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
      res.send("ok");
    }       
  }  
)



console.log("test mail server side");

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {           
        user: 'tomasgr.escultura@gmail.com',
        pass: 'horno-caido'
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
  console.log("Prueba nodemon");  
      var mailOptions = {
        from: `${req.body.email}`, // sender address
        to: 'tomasgr.escultura@gmail.com', // list of receivers
        subject: `Formulario web - ${req.body.asunto}`, // Subject line       
        html: ` mensaje enviado desde: ${req.body.email} <br> Mensaje del usuario: ${req.body.mensaje}`, // plain text body       
        replyTo:`${req.body.correo}`,
      };            

      smtpTransport.sendMail(mailOptions, function(error){
        if (error) {
          console.log(error);
          res.send("error");
        } else {
          console.log('Email sent');
          res.send("ok");
        }       
      });   
        console.log("Llamada a server correcta");
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
//app.listen(port_post);

