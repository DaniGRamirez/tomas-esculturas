import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import './BurguerMenu.css';
import{ 
  Link
} from "react-router-dom"
import logoInstagram from '../img/LogoInstaInvertido.png';

class BurguerMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

   // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

    showSettings (event) {
        event.preventDefault();       
      }

  render(){
      return(         
        <div>           
            <Menu right width="100%" isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}>           
              <Link to="/" onClick={() => this.closeMenu()} >Inicio</Link>    
              <Link to="/Catalogo" onClick={() => this.closeMenu()} >Catalogo</Link>                  
              <Link to="/About" onClick={() => this.closeMenu()}>Biografia</Link>  
              <Link to="/Contact" onClick={() => this.closeMenu()}>Contacto</Link>              
              <a target="blank" onClick={() => this.closeMenu()} className="menu-item--small" href="https://www.instagram.com/madbros.spain/">
                <img id="logoInsta" alt="logo" src = {logoInstagram}></img>
              </a>             
            </Menu>
        </div>        
          ); 
  }   
}

export default BurguerMenu;