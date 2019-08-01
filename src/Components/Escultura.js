import React, {Component} from 'react';
import './Escultura.css';

class Escultura extends Component {

    render(){
        return(
            <div className ="esculturaContainer">               
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