import React, { Component } from 'react';

import HowToOrder from './subcomponents/howToOrder.jsx';
import MenuList from './subcomponents/menuList.jsx';

export default class Menu extends Component {
    render() {
        return (
            <div style={{paddingTop: '150px'}}>
                <HowToOrder/>
                <MenuList menuItems={this.props.menuItems}/>
            </div>
        )
    }
}
