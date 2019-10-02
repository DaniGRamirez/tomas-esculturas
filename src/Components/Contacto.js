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
            console.log("Prueba mail");       
              let datos = "prueba";
              axios.post('/api/contacto',datos).
                then(function(response){
                    alert("Email mandado");
                }).catch(function(error){
                    console.log(error);
                });
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
                <button id="testEmail">
                    Test
                </button>  
        </div> 
    )}

}

export default Contacto;