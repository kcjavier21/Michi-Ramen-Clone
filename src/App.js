import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import Sticky from 'react-stickynode';
import './App.css';
import './css/burgerMenu.css';

//=== COMPONENTS ===
import Home from './components/pages/home/home.jsx';
import Menu from './components/pages/menu/menu.jsx';
import Locations from './components/pages/locations/locations.jsx';
import About from './components/pages/about/about.jsx';
import Email from './components/pages/email.jsx';
import NotFound from './components/pages/not-found.jsx';

import NavBar from './components/commons/navbar.jsx';
import Footer from './components/commons/footer.jsx';
import BurgerMenu from './components/commons/burgerMenu.jsx';

// ==== DATA ====
import { getRamenCategories } from './data/ramenCategories';
import { getToppingsList } from './data/toppings';
import { getSidesList } from './data/sides';
import { getBeveragesList } from './data/beverages';
import { getLocations } from './data/locations';
import { getAbout } from './data/about.js';

import logo from './assets/images/logo.png';

export default class App extends Component {
  state = {
    menuItems: getRamenCategories(),
    toppings: getToppingsList(),
    sides: getSidesList(),
    beverages: getBeveragesList(),
    locations: getLocations(),
    about: getAbout(),
    currentPath: '',
    theposition: 0,
    innerWidth: 0
  };

  // ===== MOUNTING =====

    componentDidMount() {
      window.addEventListener('scroll', this.getScrollPosition);

      window.addEventListener('resize', this.toggleNavBar);
      window.addEventListener('load', this.toggleNavBar);
      window.addEventListener('click', this.toggleNavBar);

      window.addEventListener('click', this.getCurrentPath);
      window.addEventListener('load', this.getCurrentPath);
      
      window.addEventListener('load', this.getInnerWidth);
      window.addEventListener('scroll', this.getInnerWidth);
      window.addEventListener('resize', this.getInnerWidth);
     
      
    }
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.getScrollPosition);

      window.removeEventListener('resize', this.toggleNavBar);
      window.removeEventListener('load', this.toggleNavBar);
      window.removeEventListener('click', this.toggleNavBar);

      window.removeEventListener('click', this.getCurrentPath);
      window.removeEventListener('load', this.getCurrentPath);

      window.removeEventListener('load', this.getInnerWidth);
      window.removeEventListener('scroll', this.getInnerWidth);
      window.removeEventListener('resize', this.getInnerWidth);
    
    }
    
    getScrollPosition = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
        
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
      const scrolled = winScroll / height;
      
      this.setState({
        theposition: scrolled,
      })
    }

    getCurrentPath = () => {
      const pagePath = window.location.pathname;
      this.setState({ currentPath: pagePath });
    };

    toggleNavBar = () => {
      if (window.innerWidth >= 825) {
        return <NavBar 
            scrollPosition={this.state.theposition}
            currentPath={this.state.currentPath}
            scrollToTop={this.scrollToTop}
          />;
      } else {
        return null;
      }
    };

    getBurgerClass = () => {
      let theClass = 'active';
      
      if(this.state.currentPath === '/')
          theClass = this.state.theposition >= 0.03 ? 'active' : '';

      return theClass;
    };

    getInnerWidth = () => {
      this.setState({ innerWidth: window.innerWidth });
    };

    // ==== AIMS to go upward whenerver you jump to another page ====
    scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    };


  render() {
      let burgerClass = this.getBurgerClass();
      let bgStyle = this.state.currentPath !== '/' ? { backgroundColor: "#433d3c" } : { };
      //console.log(this.state.innerWidth);
      
    return (
      <div>
          <div className="content">
          
               <Sticky innerZ={1}>
                 {this.toggleNavBar()}
              </Sticky>

              <div className={`burger-menu-wrapper ${burgerClass}`} style={bgStyle}>
                <BurgerMenu/>
                  <div className="burger-menu-wrapper-2">
                    <NavLink to="/" onClick={() => this.scrollToTop()}>
                      <img src={logo} alt="logo" to='/'/>
                    </NavLink>
                  </div>
              </div>

            <Switch>
                <Route path="/" exact render={(props) => <Home menuItems={this.state.menuItems}/>}/>
                <Route path="/menu" exact render={(props) => <Menu 
                    menuItems={this.state.menuItems}
                    toppings={this.state.toppings}
                    sides={this.state.sides}
                    beverages={this.state.beverages}
                    innerWidth={this.state.innerWidth}
                />} />
                <Route exact path="/locations" component={(props) => <Locations 
                    innerWidth={this.state.innerWidth}
                    locations={this.state.locations}
                />}/>

                <Route exact path="/about" component={(props) => <About
                    about={this.state.about}
                    innerWidth={this.state.innerWidth}
                />}/> 
                <Route exact path="/email" component={Email}/>  
                <Route exact path="/not-found" component={NotFound}/>
                
                <Redirect from="/home" exact to="/"/>
                <Redirect to="/not-found"/>
            </Switch>

           <Footer/> 
          </div>
      </div>
    )
  }
}
