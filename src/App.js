import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Catalogo from './Components/Catalogo'
import Test from './Components/Test'
import BurguerMenu from './Components/BurguerMenu';
import EsculturaViewer from './Components/EsculturaViewer';
import Home from './Components/Home';
import Bio from './Components/Bio';
import TallerGallery from './Components/TallerGallery';
import Exposiciones from './Components/Exposiciones';
import Contacto from './Components/Contacto';

import{
  BrowserRouter as Router,
  Route,  
} from "react-router-dom"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
    componentDidMount() {
      // console.log("Mount in App");
      // console.log(this.props.store);
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
      // console.log(this.props);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

  updatePredicate() {
    // console.log(window.innerWidth);
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  render() {
    let navBurguerMenu;
    if(this.state.isDesktop === false)     
      navBurguerMenu = <BurguerMenu/>;
    else
      navBurguerMenu = ""        
    return (     
      <Router>
        <div>
          <Header isDesktop={this.state.isDesktop}/>             
          {navBurguerMenu}
          <Route exact path='/' component={Home}/> 
          <Route exact path='/Catalogo' component={Catalogo}/>    
          <Route path='/Escultura' component={EsculturaViewer}/>  
          <Route path='/Creando' component={TallerGallery}/>  
          <Route path='/Bio' component={Bio}/>  
          <Route path='/Exposiciones' component={Exposiciones}/>  
          <Route path='/Contacto' component={Contacto}/>  
          {/* <Route exact path='/' component={Home}/> 
          <Route exact path='/Photos' component={Photos}/>        
          <Route exact path='/About' component={About}/>  
          <Route exact path='/Contact' component={SimpleContact}/>    */}
        </div>
      </Router>
    );
  }
}

export default App;
