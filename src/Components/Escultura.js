import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './Escultura.css';

class Escultura extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){                    
        // console.log(this.props.history);        
        this.props.history.push({
            pathname: '/Escultura/' + this.props.esculturaData.nombre,
            id: this.props.esculturaData.nombre,           
          })
    }

    render(){
        // console.log(this.props.esculturaData);
        return(
            <div className ="esculturaContainer" onClick = {this.handleClick}>               
                <div className="imgContainer">
                    <img src = {this.props.esculturaData.fotosEscultura[0].foto.url}/>
                </div>
                <h1 id="nombre">{this.props.esculturaData.nombre} </h1>
                <div className="materialesContainer">
                    {this.props.esculturaData.materialesEscultura.map(material =>(                                          
                        // console.log(material)
                        <h1 key={material.id} className="material">{material.material}</h1>
                        ))
                    }
                </div>              
            </div>
        )
    }
}

export default Escultura;