import React, {Component} from 'react';
import './Header.css';


import{ 
    Link
  } from "react-router-dom"

  let logo_escultura = "https://media.graphcms.com/RboDW91bQxG4PzNYejdA";
  let logo_instagram = "https://image.flaticon.com/icons/svg/733/733614.svg";

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
        nameTomas =          
        // <Link to="/"><h1 id= "nombreNav">Tomas Garcia Redondo</h1></Link>                
        <h1 id= "nombreNav">Tomas Garcia Redondo</h1>
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
            <Link to="/Contacto" >Contacto</Link>                                 
        </div>                      

        socialIcons =   
        <div className="socialNavIcons">
            <a target="blank" className="menu-item--small" href="https://www.instagram.com/tomasgr.escultura/">            
                <img className="logoInstaHeader" alt="logo" src = {logo_instagram}></img>                        
            </a>               
        </div>
    }

      return(         
        <div className="bg-light-gray">
            <div className= "header" id="myHeader">     
                <div className= "centerItems">                
                    <div className= "logo" >
                        <Link to="/">
                        {/* <img className="" alt="logo" src = {logo}></img> */}
                        <img className="" alt="logo" src = {logo_escultura}></img>
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