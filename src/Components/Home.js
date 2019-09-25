import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ReactDOM from 'react-dom';
import './Home.css';

class Home extends Component {              

    render(){
        return (                   
            <div className="HomeContainer">  
            <img src = "https://media.graphcms.com/bjhocHjSj2JE6QqriHKo"></img>
          </div>)
    }

}

export default Home;