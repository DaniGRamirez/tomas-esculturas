import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PhotoGallery from './PhotosGallery';
import Escultura from './Escultura';
import './EsculturaViewer.css';
import ReactDOM from 'react-dom';
import{ 
  Link
} from "react-router-dom"

let selected;
let formatedPhotos = [];




class EsculturaViewer extends Component {  

    constructor(props){
        super(props);
        selected = this.props.location.id;
    }

    componentDidMount(){
      window.onscroll = this.onScroll;
    }

    componentWillUnmount(){
      window.onscroll = null;
    }
    
    onScroll(){   
      console.log(document.getElementById("myHeader").offsetHeight);
      var offsetScroll = document.getElementById("myHeader").offsetHeight;
      if(window.pageYOffset > offsetScroll){
        document.getElementById("buttonBackContainer").classList.add("fixedToTop");
      }
      else{
        document.getElementById("buttonBackContainer").classList.remove("fixedToTop");
      }    
    }

    selectEscultura(fetchEsculturas,nameSelected){
        var i;
        for (i = 0; i < fetchEsculturas.length; i++) {             
            if(fetchEsculturas[i].nombre === nameSelected)
            {              
                selected = fetchEsculturas[i];
                return;
            }
          }
    }

    formatPhotosStructure(fotosEscultura){
        formatedPhotos = [];
        var i;
        for (i = 0; i < fotosEscultura.length; i++) {             
            
            formatedPhotos.push(
                {
                    src: fotosEscultura[i].foto.url,
                    width:fotosEscultura[i].widthRatio,
                    height:fotosEscultura[i].heightRatio
                }
            )
        }
    }

    render(){
        console.log(this.props.history);

        let { loading, error,esculturas} = this.props.data;
        
        if (error){
            console.log(error);
            return <h1>Error</h1>
        }

        if(!loading){

            console.log(this.props.match);
            console.log(this.props.location);
            var idEscultura = this.props.location.pathname.replace("/Escultura/",'');
            console.log(idEscultura);
            this.selectEscultura(esculturas,idEscultura);
            this.formatPhotosStructure(selected.fotosEscultura);
            console.log(selected);
            // console.log(selected);           
            // console.log(formatedPhotos);
            return (      
              <div>
                <div id="buttonBackContainer">
                  <Link to="/Catalogo" >                 
                    <img id="buttonBack" src="https://image.flaticon.com/icons/svg/149/149153.svg"></img>
                  </Link>
                </div>
                <div className="EsculturaContainer">                   
                    <div className = "EsculturaInfo">
                      <Escultura  disabled = {true} esculturaData ={selected} history={this.props.history}></Escultura>
                      <div className ="EsculturaDescription">
                        <h1>{selected.nombre}</h1>
                        <p className="TextoDescripcion" id="Descripcion">
                          {selected.descripcion}                        
                        </p>                     
                        <p className="TextoDescripcion" id="Medidas">                        
                            {selected.medidas}
                        </p>                
                      </div>                                     
                    </div>
                    <div className="galleryEsculturaContainer">
                      <PhotoGallery selectedPhotos={formatedPhotos}></PhotoGallery>
                    </div>
              </div>             
            </div>)
        }

        return (
          <div className= "centerDiv">
              <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>)
    }

}

export const escultura = gql`
  query escultura {
    esculturas{
      nombre      
      descripcion      
      medidas
      materialesEscultura{
        material        
      }      
      fotosEscultura{
          nombre
          foto
          {
            url
          }
          widthRatio
          heightRatio
      }
    }
  }
`
console.log(selected);
export default graphql(escultura,{    
    options: ({match,}) => ({
      variables: {
        nombre: match.params.slug
      }
    })
  })(EsculturaViewer)