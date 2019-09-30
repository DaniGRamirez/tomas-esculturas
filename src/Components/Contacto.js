import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Contacto.css';

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
                <button id="testEmail">
                    Test
                </button>  
        </div> 
    )}

}

export default Contacto;