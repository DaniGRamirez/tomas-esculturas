import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Contacto.css';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
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
}

main().catch(console.error);

class Contacto extends Component {              

    render(){
        return (                   
            <div className="ContactContainer">       
                <div className = "ContactElement">
                    <img src="https://image.flaticon.com/icons/svg/18/18609.svg"></img>
                    <h1>tomasgr.escultura@gmail.com</h1>            
                </div>                            
                <div className = "ContactElement">
                    <img src=" https://image.flaticon.com/icons/svg/0/191.svg"></img>   
                    <h1>+34-609278080</h1>                                 
                </div>     
        </div> 
    )}

}

export default Contacto;