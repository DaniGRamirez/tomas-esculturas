import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Home.css';
import axios from 'axios';
import IgMediaPost from './IGMediaPost'
import IGGallery from './IGGallery'


class Home extends Component {                  

    constructor(props) {
        super(props);
        this.state = 
        {
            videoLoaded: false,           
        };        
    }    

    render(){
        console.log(this.state.dataIG)
        return (
            <div>                   
                <div className="HomeContainer">  
                <video autoPlay playsInline muted loop id="myVideo">
                    <source 
                    src="https://media.graphcms.com/NRSu42t5Rm6ZLwXToEvC" 
                    type="video/mp4"/>
                </video>
                    {/* <img src = "https://media.graphcms.com/iG36ckBRYe2ZCWmkiPt0"></img> */}
                    <div className="contentHome">
                        <h1>Tomas Garcia Redondo</h1>
                        <p>Escultor</p>
                    </div>
                </div>    
               <IGGallery/>  
            </div>
        )
    }

}

export default Home;