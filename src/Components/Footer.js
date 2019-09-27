import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends Component {              

    render(){
        return (                   
            <div className="FooterContainer">       
              <p> Web by <b>Daniel Garcia</b></p>
              <a target="blank" href="https://www.instagram.com/madbros.spain/"> MadBros.spain</a>
        </div> 
    )}

}

export default Footer;