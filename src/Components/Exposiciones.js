import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import './Exposiciones.css';

class Exposiciones extends Component {              

    renderExposiciones(_exposiciones)
    {
            return(
                <div>
                    <p>{_exposiciones[0].nombre} </p>
                </div>
            )
    }

    render(){

        let { loading, error,exposicionesActivases } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){
            console.log(exposicionesActivases[0].exposiciones);
            return (                   
                <div className="ExposicionesContainer">                        
                    <div className="ExposicionesActualesContainer">
                    {this.renderExposiciones(exposicionesActivases[0].exposiciones)}
                    </div>              
                    <div className="ExposicionesActualesContainer">

                    </div>              
            </div>)
        }

        return (
        <div className= "centerDiv">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>)
    }
}

export const contentExposiciones = gql`
  query contentQuery {
    exposicionesActivases{
            exposiciones{                
                nombre
                fechaInicio
                fechaFinal
                fotoPrincipal{
                    url
                }
                descripcion
                fotoEsculturas{
                    foto{
                        url
                    }
                }
        }
    }
    exposicionesPasadases{
        id
    }
  }
`

export default graphql(contentExposiciones)(Exposiciones)