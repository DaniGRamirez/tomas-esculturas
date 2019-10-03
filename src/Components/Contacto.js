import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Contacto.css';
import axios from 'axios';

class Contacto extends Component {              

componentDidMount(){
    var testMail = document.getElementById("testEmail");
    if(testMail != null)
    {
        document.getElementById("testEmail").addEventListener("click",function(){

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
                    console.log(datos);

                  axios.post('/api/contacto',datos).
                    then(function(response){
                        alert("Email mandado");
                    }).catch(function(error){
                        console.log(error);
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
                <div className = "ContactElement">
                    <img src="https://image.flaticon.com/icons/svg/18/18609.svg"></img>
                    <h1>tomasgr.escultura@gmail.com</h1>            
                </div>                            
                <div className = "ContactElement">
                    <img src=" https://image.flaticon.com/icons/svg/0/191.svg"></img>   
                    <h1>+34-609278080</h1>                                 
                </div>   
                <label >Mail* </label>
                <input type="email" id="correo" placeholder="name@example.com" required></input>
                <label >Nombre* </label>
                <input type="text" id="nombre" placeholder="nombre" required></input>
                <label >Asunto? </label>
                <input type="text" id="asunto" placeholder="asunto"></input>
                <label >Mensaje* </label>
                <textarea type="email" id="mensaje" rows="4"></textarea>
                <button id="testEmail">
                    Enviar mail
                </button>  
        </div> 
    )}

}

export default Contacto;