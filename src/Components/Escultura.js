import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './Escultura.css';

class Escultura extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){            
        console.log("Escultura clickada ");
        console.log(this.props);
        console.log(this.props.history);        
        this.props.history.push({
            pathname: '/Escultura/' + this.props.esculturaData.nombre,
            id: this.props.esculturaData.nombre,           
          })
    }

    render(){
        return(
            <div className ="esculturaContainer" onClick = {this.handleClick}>               
                <div className="imgContainer">
                    <img src = {this.props.esculturaData.fotosEscultura[0].foto.url}/>
                </div>
                <h1 id="nombre">{this.props.esculturaData.nombre} </h1>
                <div className="materialesContainer">
                    {this.props.esculturaData.materialesEscultura.map(material =>(                                          
                        <h1 className="material">{material.material}</h1>
                        ))
                    }
                </div>              
            </div>
        )
    }
}

export default Escultura;