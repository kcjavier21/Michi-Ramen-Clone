import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/navbar.css';
import logo from '../../assets/images/logo.png';

class NavBar extends Component { 
    state = {
        hamburgerActive: false
    }
    // === Aims to change the background of navbar ====
    getNavClass = () => {
        let theClass = 'active';
        
        if(this.props.currentPath === '/')
            theClass = this.props.scrollPosition >= 0.03 ? 'active' : '';

        return theClass;
    };

    toggleHamburgerClass = () => {
        let active = this.state.hamburgerActive;
        console.log(active);
        active = !active;

        this.setState({ hamburgerActive: active });
    }

    getHamburgerClass = () => {
        return this.state.hamburgerActive === true ? 'active' : '';
    }

    

    render() { 
        let navClass = this.getNavClass();
        let bgStyle = this.props.currentPath !== '/' ? { backgroundColor: "#433d3c" } : { };

        return (
            <React.Fragment>
                <div className={`nav-section ${navClass}`} style={bgStyle}>
                    <nav className="navigation-bar">
                        <NavLink to="/">
                            <img src={logo} className="logo" alt="Logo"/>
                        </NavLink>
                        
                        <div id="hamburger-btn" className={this.getHamburgerClass()} onClick={() => this.toggleHamburgerClass()}>
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