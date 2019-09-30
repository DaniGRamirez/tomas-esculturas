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
        service: 'Gmail', // sets automatically host, port and connection security settings
        auth: {
            user: "tomasgr.escultura@gmail.com", // service is detected from the username
            pass: "hornocaido"
        }
    });
    // // create reusable transporter object using the default SMTP transport
    // var transporter = nodemailer.createTransport("SMTP",{
    //     auth: {
    //         user: "tomasgr.escultura@gmail.com", // service is detected from the username
    //         pass: "hornocaido"
    //     }
    // });

    // send mail with defined transport object
    let info = await smtpTransport.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'tomasgr.escultura@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
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