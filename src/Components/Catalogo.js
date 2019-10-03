
import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Escultura from './Escultura'
import './Catalogo.css';
import './Loading.css'
import{
  BrowserRouter as Router,
  Route,  
} from "react-router-dom"

class Catalogo extends Component 
{
    render(){        
        let { loading, error,esculturas } = this.props.data;
        
        if (error){

        }

        if(!loading){                    
            // console.log(this.props.data.esculturas);
            return (                   
              <div>                                      
                  <div className ="catalogoContainer" > 
                      {esculturas.map(escultura =>(                                          
                        // console.log(escultura)         
                        <Escultura key={escultura.id} esculturaData ={escultura} history={this.props.history}></Escultura>                        
                        ))
                      }   
                  </div>                                 
            </div>)
        }

        return (
            <div className= "centerDiv">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>)
    }
}
   
export const esculturas = gql`
  query esculturas { 
    esculturas{
      nombre      
      id
      materialesEscultura{
        material   
        id     
      }      
      fotosEscultura{
          nombre
          foto
          {
            url
          }
      }
    }
  }
`


export default graphql(esculturas)(Catalogo)