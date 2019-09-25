import React, {Component} from 'react';
import './Header.css';
import logo from '../img/logoredandwhite.png';
import logoInstagram from '../img/LogoInstaInvertido.png';
import{ 
    Link
  } from "react-router-dom"



class Header extends Component {
    showSettings (event) {
        event.preventDefault();       
      }

  render(){
    let navBar;
    let socialIcons = "";
    let nameTomas= "";
    let nameTitulo="";
    if(this.props.isDesktop === false)     
    {
        navBar = ""
        socialIcons="";  
        nameTomas = <h1 id= "nombreNav">Tomas Garcia Redondo</h1>;
    }   
    else
    {

        nameTomas = "";
        nameTitulo = "Tomas Garcia Redondo";
        navBar =  
      
        <div className="navs">                               
            <Link to="/Catalogo" >Catalogo</Link>                  
            <Link to="/Bio" >Bio</Link>  
            <Link to="/Creando" >Creando</Link>                                 
            <Link to="/Exposiciones" >Exposiciones</Link>  
            <Link to="/Contact" >Contacto</Link>                                 
        </div>                      

        socialIcons =   
        <div className="socialNavIcons">
            <a target="blank" className="menu-item--small" href="https://www.instagram.com/madbros.spain/">            
                <img className="logoInstaHeader" alt="logo" src = {logoInstagram}></img>                        
            </a>               
        </div>
    }

      return(         
        <div className="bg-light-gray">
            <div className= "header">    
                <div className= "centerItems">                
                    <div className= "logo" >
                        <Link to="/">
                        <img className="" alt="logo" src = {logo}></img>
                        </Link>
                    </div>   
                    <div className="letrasHeader" >
                        <div className="Titulo">
                            {nameTitulo}
                        </div>
                        {navBar}
                    </div>
                    {socialIcons}
                    {nameTomas}
                </div>           
            </div>             
        </div>        
          ); 
  }   
}

export default Header;