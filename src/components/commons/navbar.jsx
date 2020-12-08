import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css';
import logo from '../../assets/images/logo.png';


class NavBar extends Component {
    render() { 
        return (  
            <nav className="navigation-bar">
                <img src={logo} className="logo"/>
                <div className="navigation-bar-2">
                    <NavLink to="/menu" className="nav-menu">MENU</NavLink>
                    <NavLink to="/locations" className="nav-menu">LOCATIONS</NavLink>
                    <NavLink to="/about" className="nav-menu">ABOUT</NavLink>
                    <NavLink to="/email" className="nav-menu">EMAIL</NavLink>
                </div>
                <btn type="button" className="btn-order-online">ORDER ONLINE</btn>
            </nav>
        );
    }
}
 
export default NavBar;