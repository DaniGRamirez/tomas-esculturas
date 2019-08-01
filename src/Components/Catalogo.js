
import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Escultura from './Escultura'
import './Catalogo.css';
import './Loading.css'

// const Catalogo = ({ data: { loading, error,esculturas } }) => {  
//     if (error){
//        console.log(error); 
//       return <h1>Error fetching the post!</h1>    
//     } 

//     if (!loading) {    
//       console.log(esculturas);
//       return <h1> Test</h1>
//     }
//     else
//         return <h1>Loading</h1>
// }  

class Catalogo extends Component 
{
    render(){
        let { loading, error,esculturas } = this.props.data;
        
        if (error){

        }

        if(!loading){
                    
            console.log(esculturas);
            return (            
            <div>                       
                <div className ="catalogoContainer"> 
                    {esculturas.map(escultura =>(                                          
                        <Escultura esculturaData ={escultura}></Escultura>                        
                    ))
                    }   
                </div>              
            </div>)
        }

        return (
            <div className= "centerDiv">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>)
    }
}
   
export const esculturas = gql`
  query esculturas {
    esculturas{
      nombre      
      materialesEscultura{
        material        
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

console.log(esculturas);

export default graphql(esculturas)(Catalogo)