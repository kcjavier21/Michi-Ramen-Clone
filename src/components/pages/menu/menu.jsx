import React, { Component } from 'react';
import MenuList from './subcomponents/menuList.jsx';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <MenuList menuItems={this.props.menuItems}/>
            </div>
        )
    }
}
