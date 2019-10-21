import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PhotoGallery from './PhotosGallery';
import ReactDOM from 'react-dom';
import './TallerGallery.css';

let formatedPhotos = [];
class TallerGallery extends Component {  

    constructor(props){
        super(props);       
    }       

    formatPhotosStructure(fotosTaller){        
        formatedPhotos = [];
        var i;
        for (i = 0; i < fotosTaller.fotosGaleriaTaller.length; i++) {             
            let scaleFactor = Math.random() +1;
            formatedPhotos.push(
                {
                    src: fotosTaller.fotosGaleriaTaller[i].url,
                    width:fotosTaller.fotosGaleriaTaller[i].width * scaleFactor,
                    height:fotosTaller.fotosGaleriaTaller[i].height * scaleFactor
                }
            )
        }
    }

    render(){
        // console.log(this.props.history);
        // console.log(this.props.data);
        let { loading, error,galeriaTallers} = this.props.data;
        // console.log(galeriaTallers);
        if (error){
            console.log(error);
            return <h1>Error</h1>
        }

        if(!loading){                                      
            this.formatPhotosStructure(galeriaTallers[0]);                  
            return (                   
              <div className="TallerGallery">                                                                                  
                  <PhotoGallery typeDirection="row" selectedPhotos={formatedPhotos}></PhotoGallery>
            </div>)
        }

        return (
          <div className= "centerDiv">
              <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>)
    }

}

export const fotosTaller = gql`
  query fotosTaller {
    galeriaTallers{
      nombre            
      fotosGaleriaTaller{          
        id
        height
        width
        url   
      }
    }
  }
`

export default graphql(fotosTaller,{    
    options: ({match,}) => ({
      variables: {
        nombre: match.params.slug
      }
    })
  })(TallerGallery)