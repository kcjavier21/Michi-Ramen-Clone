import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css';
import logo from '../../assets/images/logo.png';



class NavBar extends Component {
    render() { 
        return (
            <div className="nav-section">
                <nav className="navigation-bar">
                    <NavLink to="/" className="nav-menu">
                        <img src={logo} className="logo" alt="Logo"/>
                    </NavLink>

                    <div className="navigation-bar-2">
                        <NavLink to="/menu" className="nav-menu">MENU</NavLink>
                        <NavLink to="/locations" className="nav-menu">LOCATIONS</NavLink>
                        <NavLink to="/about" className="nav-menu">ABOUT</NavLink>
                        <NavLink to="/email" className="nav-menu">EMAIL</NavLink>
                    </div>
                    <button type="button" className="btn-order-online">ORDER ONLINE</button>
                </nav>
            </div>
        );
    }
}
 
export default NavBar;