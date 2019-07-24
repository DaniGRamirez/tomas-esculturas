
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Test = ({ data: { loading, error,esculturas } }) => {  
  if (error){
     console.log(error); 
    return <h1>Error fetching the post!</h1>    
} 
  if (!loading) {    
    console.log(esculturas);
    return (        
        <div>
        {/* <div>
            <h1>{exposicions[0].esculturasExposicion[0].nombre}</h1>
            <img src ={exposicions[0].esculturasExposicion[0].foto.url}></img>
        </div>       */}        
            <div>
                {esculturas.map(escultura =>(
                    <div>
                        <h1>{escultura.nombre}</h1>   
                        {escultura.fotosEscultura.map(foto =>(
                            <div>                               
                                <img src = {foto.foto.url}></img>
                            </div>
                        ))} 
                        {escultura.materialesEscultura.map(material =>(
                            <div>                               
                                <h2>{material.material}</h2>   
                            </div>
                        ))} 
                    </div>
                ))
                }               
            </div>
        </div>
    )
  }
  return <h2>Loading post...</h2>
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

export default graphql(esculturas)(Test)