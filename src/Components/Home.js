import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Home.css';

class Home extends Component {              

    render(){
        return (                   
            <div className="HomeContainer">  
            <img src = "https://media.graphcms.com/iG36ckBRYe2ZCWmkiPt0"></img>
          </div>)
    }

}

export default Home;