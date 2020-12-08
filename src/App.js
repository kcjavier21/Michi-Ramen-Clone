import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

//=== COMPONENTS ===
import Home from './components/pages/home.jsx';
import Menu from './components/pages/menu.jsx';
import Locations from './components/pages/locations.jsx';
import About from './components/pages/about.jsx';
import Email from './components/pages/email.jsx';
import NotFound from './components/pages/not-found.jsx';


export default class App extends Component {
  render() {
    return (
      <div>
          <div className="content">
            <Switch>
                <Route path="/menu" component={Menu}/>
                <Route path="/locations" component={Locations}/>
                <Route path="/about" component={About}/>
                <Route path="/email" component={Email}/>
                <Route path="/home" component={Home}/>
                <Route path="not-found" component={NotFound}/>
                
                <Redirect from="/" exact to="/home"/>
                <Redirect from="/not-found"/>
            </Switch>
          </div>
      </div>
    )
  }
}
