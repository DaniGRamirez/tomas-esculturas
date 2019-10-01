import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import axios from 'axios';

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjxzwildf4b9v01cedb2uvxle/master'


const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));

    var testMail = document.getElementById("testEmail");
    if(testMail != null)
    {
        document.getElementById("testEmail").addEventListener("click",function(){
            console.log("Prueba mail");       
              let datos;
              axios.post('/api/contacto',datos).
                then(function(response){
                    alert("Email mandado");
                }).catch(function(error){
                    console.log(error);
                });
          });
    }
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
