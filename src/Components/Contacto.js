import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Contacto.css';
import axios from 'axios';

class Contacto extends Component {              

componentDidMount(){
    var buttonSendMail = document.getElementById("buttonEmail");
    if(buttonSendMail != null)
    {
            buttonSendMail.addEventListener("click",function(){

            let nombre = document.getElementById("nombre").value;
            let email = document.getElementById("correo").value;
            let asunto = document.getElementById("asunto").value;
            let mensaje = document.getElementById("mensaje").value;

            if(nombre != "" && email != "" && mensaje != ""){                            
                  let datos = {
                      nombre: nombre,
                      email: email,        
                      asunto: asunto,
                      mensaje: mensaje,    
                  }                                    
                  axios.post('/api/contacto',datos).
                    then(function(response){                    
                            alert("Email mandado");                        
                    }).catch(function(error){
                        console.log(error);
                        alert('No se ha podido enviar el email. Disculpe las molestias');
                    });
            }
            else{
                alert("Por favor rellena todos los campos obligatorios");
            }          
          });
    }
    else{
        console.log("testMail button is null");
    }
}

    render(){
        return (                   
            <div className="ContactContainer">       
                <div className="formMailContainer">
                    <h1> Contacta con Tomás </h1>
                    <div className="inputContainer">
                        <label className="labelForm">Mail* </label>
                        <input type="email" id="correo" placeholder="nombre@ejemplo.com" required></input>
                    </div>
                    <div className="inputContainer">
                        <label className="labelForm">Nombre* </label>
                        <input type="text" id="nombre" placeholder="nombre" required></input>
                    </div>
                    <div className="inputContainer">
                        <label className="labelForm" >Asunto? </label>
                        <input type="text" id="asunto" placeholder="asunto"></input>
                    </div>
                    <div className="inputContainer">
                        <label className="labelForm" >Mensaje* </label>
                        <textarea type="email" id="mensaje" rows="6"></textarea>
                    </div>
                    <div className="buttonMailContainer">                    
                        <button id="buttonEmail">
                            Enviar mail
                        </button>  
                    </div>
                <div className = "ContactElement">
                    <img src="https://image.flaticon.com/icons/svg/18/18609.svg"></img>
                    <h1>tomasgr.escultura@gmail.com</h1>            
                </div>                            
                <div className = "ContactElement">
                    <img src=" https://image.flaticon.com/icons/svg/0/191.svg"></img>   
                    <h1>+34-609278080</h1>                                 
                </div>                   
                </div>
        </div> 
    )}

}

export default Contacto;