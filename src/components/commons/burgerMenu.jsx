import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../../css/burgerMenu.css';

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    
    return (
        
      <Menu right >
            <a id="home" className="menu-item" href="/" style={{display: 'block'}}>Home</a>
            <a id="home" className="menu-item" href="/menu" style={{display: 'block'}}>Menu</a>
            <a id="home" className="menu-item" href="/locations" style={{display: 'block'}}>Locations</a>
            <a id="about" className="menu-item" href="/about" style={{display: 'block'}}>About</a>
            <a id="contact" className="menu-item" href="mailto:hey@michiramen.com" style={{display: 'block'}}>Email</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="menu" style={{display: 'block'}}>Settings</a>
      </Menu>
     
      
    );
  }
}

export default BurgerMenu;