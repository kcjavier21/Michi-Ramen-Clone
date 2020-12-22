import React, { Component } from 'react';

import HowToOrder from './subcomponents/howToOrder.jsx';
import MenuList from './subcomponents/menuList.jsx';
import ToppingsList from './subcomponents/toppingsList.jsx';
import SidesList from './subcomponents/sidesList.jsx';

import mochiHeader from '../../../assets/images/Mochi-header.jpg';
import toppings from '../../../assets/images/toppings.jpg';

export default class Menu extends Component {
    render() {
        const mochiHeaderStyle = {
            backgroundImage: `url(${mochiHeader})`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
            height: '40vw',
            maxHeight: '900px',
            transform: 'translate(0, -150px)'
        };

        const toppingsStyle = {
            backgroundImage: `url(${toppings})`,
            backgroundSize: '100%',
            backgroundPosition: 'center',
            height: '40vw',
            maxHeight: '900px',
            transform: 'translate(0, -150px)'
        };

        return (
            <div style={{paddingTop: '150px'}}>
                <HowToOrder/>
                <MenuList menuItems={this.props.menuItems}/>
                    <div style={toppingsStyle} />   
                <ToppingsList toppings={this.props.toppings}/>
                    <div style={mochiHeaderStyle} />
                <SidesList sides={this.props.sides}/>
            </div>
        )
    }
}
