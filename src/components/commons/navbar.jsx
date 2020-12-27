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
        
        active = !active;

        this.setState({ hamburgerActive: active });
        console.log(this.state.hamburgerActive);
    }

    getHamburgerClass = () => {
        return this.state.hamburgerActive === true ? 'active' : '';
    }
    

    render() { 
        const { currentPath, scrollToTop } = this.props;
        let navClass = this.getNavClass();
        let bgStyle = currentPath !== '/' ? { backgroundColor: "#433d3c" } : { };

        return (
            <React.Fragment>
                <div className={`nav-section ${navClass}`} style={bgStyle}>
                    <nav className="navigation-bar">
                        <NavLink to="/" onClick={() => scrollToTop()}>
                            <img src={logo} className="logo" alt="Logo"/>
                        </NavLink>

                        <div className="navigation-bar-2" onClick={() => scrollToTop()}>
                            <NavLink to="/menu" className="nav-menu">MENU</NavLink>
                            <NavLink to="/locations" className="nav-menu">LOCATIONS</NavLink>
                            <NavLink to="/about" className="nav-menu">ABOUT</NavLink>
                            <a href="mailto:hey@michiramen.com" className="nav-menu">EMAIL</a>
                        </div>

                        <a href="" className="btn-order-online">ORDER ONLINE</a>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;