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


import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

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

    formatHtmlText(textHtml){
      if(textHtml != null){
        var html_form =  textHtml.replace('"','');        
        return  <div className="TextoDescripcion">{ReactHtmlParser(html_form)}</div> ;      
      }
      else return "";
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
        let { loading, error,esculturas} = this.props.data;
        
        if (error){
          console.log(error);
          return <h1>Error</h1>
        }
        
        if(!loading){                        
           
            var idEscultura = this.props.location.pathname.replace("/Escultura/",'');            
            this.selectEscultura(esculturas,idEscultura);
            this.formatPhotosStructure(selected.fotosEscultura);                        
            return (      
              <div>
                <div id="buttonBackContainer">
                  <Link to="/Catalogo" >                 
                    <img id="buttonBack" src="https://image.flaticon.com/icons/svg/148/148772.svg"></img>
                  </Link>
                </div>
                <div className="EsculturaContainer">                   
                    <div className = "EsculturaInfo">
                      <Escultura  disabled = {true} esculturaData ={selected} history={this.props.history}></Escultura>
                      <div className ="EsculturaDescription">
                        <h1>{selected.nombre}</h1>                                   
                        {this.formatHtmlText(selected.richDescripcion.html)}                                                                                 
                        <p className="TextoDescripcion" id="Medidas">                        
                            {selected.medidas}
                        </p>  
                      </div>                                     
                    </div>
                    <div className="galleryEsculturaContainer">
                      <PhotoGallery fixedColumns={4} selectedPhotos={formatedPhotos} ></PhotoGallery>
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
      richDescripcion{
        text
        html
      }
      medidas
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
          widthRatio
          heightRatio
      }
    }
  }
`
// console.log(selected);

export default graphql(escultura,{    
    options: ({match,}) => ({
      variables: {
        nombre: match.params.slug
      }
    })
  })(EsculturaViewer)