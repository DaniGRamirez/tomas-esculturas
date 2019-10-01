import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Home.css';

class Home extends Component {              

    render(){
        return (
            <div>                   
                <div className="HomeContainer">  
                <video autoplay="true" muted loop id="myVideo">
                    <source src="https://storage.coverr.co/videos/Clouds_Lapse?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY5OTI1MTYzfQ.NtnnSD0nU9LpLqNk3TYhnmNibdyZvSCP61oTBqHhihU" type="video/mp4"/>
                </video>
                    {/* <img src = "https://media.graphcms.com/iG36ckBRYe2ZCWmkiPt0"></img> */}
                    <div className="contentHome">
                        <h1>Tomas Garcia Redondo</h1>
                        <p>Escultor</p>
                    </div>
                </div>             
            </div>
            )
    }

}

export default Home;