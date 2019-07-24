import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Test from './Components/Test'

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
    this.setState({ isDesktop: window.innerWidth > 500 });
  }

  render() {
    let navBurguerMenu;
    if(this.state.isDesktop === false) 
    navBurguerMenu = ""       
      //navBurguerMenu = <BurguerMenu/>;
    else
      navBurguerMenu = ""        
    return (     
      <Router>
      <div>
        <Header isDesktop={this.state.isDesktop}/>    
        <Test/>  
        {navBurguerMenu}
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
