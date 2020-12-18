import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

//=== COMPONENTS ===
import Home from './components/pages/home/home.jsx';
import Menu from './components/pages/menu/menu.jsx';
import Locations from './components/pages/locations.jsx';
import About from './components/pages/about.jsx';
import Email from './components/pages/email.jsx';
import NotFound from './components/pages/not-found.jsx';

import NavBar from './components/commons/navbar.jsx';



export default class App extends Component {
  render() {
    return (
      <div>
          
          <div className="content">
          <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/menu" component={Menu}/>
                <Route exact path="/locations" component={Locations}/>
                <Route exact path="/about" component={About}/> 
                <Route exact path="/email" component={Email}/>  
                <Route exact path="/not-found" component={NotFound}/>
                
                <Redirect from="/home" exact to="/"/>
                <Redirect to="/not-found"/>
            </Switch>
          </div>
      </div>
    )
  }
}
