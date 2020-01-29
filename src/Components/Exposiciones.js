import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import './Exposiciones.css';
import PhotoGallery from './PhotosGallery';
import ReactGA from 'react-ga';

function isEmpty(str) {
    return (!str || 0 === str.length);
}

class Exposiciones extends Component {              


    renderExposiciones(_exposicion_render)
    {
        console.log(_exposicion_render);
        let formatedPhotos = [];
        var i;
        for (i = 0; i < _exposicion_render.fotosExposicion.length; i++) {             
            
            formatedPhotos.push(
                {
                    src: _exposicion_render.fotosExposicion[i].url,
                    width:_exposicion_render.fotosExposicion[i].width,
                    height:_exposicion_render.fotosExposicion[i].height
                }
            )
        }
        
        let web_info = "";
        if(!isEmpty(_exposicion_render.web))
            web_info =<a id="webExposicion" target="blank" href={_exposicion_render.web}> <b>Web:</b> {_exposicion_render.web}</a>

        // console.log(formatedPhotos);

            return(
                <div key={_exposicion_render.id} className="Exposicion">
                    <div className="ExposicionImgContainer">
                        <img id="fotoPrincipal" src={_exposicion_render.fotoPrincipal.url}/>
                    </div>
                    <div className="InfoExposicion">
                        <h1>{_exposicion_render.nombre} </h1>
                        <p>{_exposicion_render.descripcion} </p>
                        <p> <b>Desde:</b> {_exposicion_render.fechaInicio} </p>
                        <p id="hasta"> <b>Hasta:</b> {_exposicion_render.fechaFinal}</p>
                        <div className="direccionContainer">
                            <p> <b>Dirección:</b> {_exposicion_render.lugar}</p>                   
                            <a target="blanck" id="mapa" href={"https://www.google.com/maps/search/" + _exposicion_render.lugarMapa.latitude + "," +_exposicion_render.lugarMapa.longitude}>
                                <img src="https://image.flaticon.com/icons/svg/149/149442.svg"/>
                            </a>
                        </div>                      
                       {web_info}
                        <div className="ExposicionGalleryContainer">
                            <PhotoGallery fixedColumns={4} selectedPhotos={formatedPhotos}></PhotoGallery>
                        </div>
                    </div>
                </div>
            )
    }

    render(){

        // ReactGA.pageview("/Exposiciones");
        let { loading, error,exposicionesActivases } = this.props.data;
        
        if (error){
            console.log(error);
        }
        
        if(!loading){            
            return (                   
                <div className="ExposicionesContainer">                        
                    <div className="ExposicionesActualesContainer">
                        <h1> Exposiciones actuales </h1>
                        {exposicionesActivases[0].exposiciones.map(exposicion =>(                                          
                        this.renderExposiciones(exposicion)
                        ))
                    }                      
                    </div>              
                    <div className="ExposicionesPasadasContainer">

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
                id
                fechaInicio
                fechaFinal
                lugar
                lugarMapa{
                    latitude
                    longitude
                }             
                fotoPrincipal{
                    url
                }
                descripcion
                web
                fotosExposicion{
                    id
                    height
                    width
                    url
                }                
        }
    }
    exposicionesPasadases{
        id
    }
  }
`

export default graphql(contentExposiciones)(Exposiciones)