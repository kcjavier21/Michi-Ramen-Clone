import React, { Component } from 'react';
import MenuList from './subcomponents/menuList.jsx';

export default class Menu extends Component {
    render() {
        return (
            <div>
                {/* <h1>Menu</h1> */}
                <MenuList menuItems={this.props.menuItems}/>
            </div>
        )
    }
}
