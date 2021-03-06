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
import Footer from './Components/Footer';
import { createBrowserHistory } from 'history';

import ReactGA from 'react-ga';
// import auth from './auth.ts'; // Sample authentication provider
import{
  BrowserRouter as Router,
  Route,  
} from "react-router-dom"

import GA from './GoogleAnalytics'

// const trackingId = "UA-157055442-2"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
    componentDidMount() {    
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);      
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

  updatePredicate() {    
    this.setState({ isDesktop: window.innerWidth > 600 });
  }

  render() {

    ReactGA.event({      
      category: "Test render App",
      action: "User enters app",
    });

    let navBurguerMenu;
    if(this.state.isDesktop === false)     
      navBurguerMenu = <BurguerMenu/>;
    else
      navBurguerMenu = ""        
    return (     
      <Router>
        { GA.init() && <GA.RouteTracker /> }
        <div className="AppContainer">
          <div className="ContentContainer">
            <Header isDesktop={this.state.isDesktop}/>     
            <div className="ContentPage">
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
          </div>
          <Footer/>
        </div>
      </Router>     
    );
  }
}

export default App;
