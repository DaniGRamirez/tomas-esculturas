import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Bio.css';
import {formatHtmlText} from './FormatHtml.js'

class Bio extends Component {              
    
    render(){

        let { loading, error,bioInfo,textInfo,assetTextoes } = this.props.data;
        
        if (error){
            
        }
        
        if(!loading){                    
            console.log(this.props);
            let textBio = this.props.data.assetTextoes.find(item => item.nombre === 'Biografia').textoRich.html;  
            let textCurriculum = this.props.data.assetTextoes.find(item => item.nombre === 'CurriculumExposicionesPasadas').textoRich.html;  
            console.log(textBio);  
            return (    
                <div className="BioPageContainer">
                    <div className="BioContainer">  
                        <div className="ImgBioContainer">             
                            <img src = "https://media.graphcms.com/kf4EhbMRMW0tcnsKQMm9"></img>
                        </div>
                        <div className="BioTextContainer">
                            <h1>Biografia</h1>
                            <div>{formatHtmlText(textBio)}</div>
                        </div>
                    </div>                 
                    <div className="CurriculumContainer">
                        <div className="CurriculumTextContainer BioTextContainer">{formatHtmlText(textCurriculum)}</div>
                    </div>

                </div>)
        }

        return (
            <div className= "centerDiv">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>)

       
    }

}

export const bioInfo = gql`
    query assets {
    assetTextoes {      
        id
        textoRich {
            raw
            html
        }
        nombre
        }
    }
`


export default graphql(bioInfo)(Bio)