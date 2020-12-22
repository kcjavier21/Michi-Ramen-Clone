import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css';
import logo from '../../assets/images/logo.png';



class NavBar extends Component { 
    getNavClass = () => {
        let theClass = 'active';
        
        if(this.props.currentPath === '/')
            theClass = this.props.scrollPosition >= 0.03 ? 'active' : '';
        else
            theClass = 'active';

        return theClass;
    };

    getMenuClass = () => {
        let theClass = 'nav-menu active';
        return theClass;
    };

    render() { 
        let navClass = this.getNavClass();
        let bgStyle = {};
        bgStyle = this.props.currentPath !== '/' ? { backgroundColor: "#433d3c" } : { };

        return (
            <React.Fragment>
                <div className={`nav-section ${navClass}`} style={bgStyle}>
                    <nav className="navigation-bar">
                        <NavLink to="/">
                            <img src={logo} className="logo" alt="Logo"/>
                        </NavLink>
                        
                        <div id="toggle-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="navigation-bar-2">
                            <NavLink to="/menu" className="nav-menu">MENU</NavLink>
                            <NavLink to="/locations" className="nav-menu">LOCATIONS</NavLink>
                            <NavLink to="/about" className="nav-menu">ABOUT</NavLink>
                            <NavLink to="/email" className="nav-menu">EMAIL</NavLink>
                        </div>

                        <button type="button" className="btn-order-online">ORDER ONLINE</button>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;