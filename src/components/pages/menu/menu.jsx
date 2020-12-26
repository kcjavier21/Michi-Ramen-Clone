import React, { Component } from 'react';

import HowToOrder from './subcomponents/howToOrder.jsx';
import MenuList from './subcomponents/menuList.jsx';
import ToppingsList from './subcomponents/toppingsList.jsx';
import SidesList from './subcomponents/sidesList.jsx';
import Beverages from './subcomponents/beverages.jsx';

import mochiHeader from '../../../assets/images/Mochi-header.jpg';
import toppingsHeader from '../../../assets/images/toppings.jpg';

export default class Menu extends Component {
    createImageHeader = (image) => {
        return <div style={
            {
                backgroundImage: `url(${image})`,
                backgroundSize: '100%',
                backgroundPosition: 'center',
                height: '40vw',
                maxHeight: '900px',
                transform: 'translate(0, -150px)'
            }
        } />
    }

    render() {
        const {menuItems, toppings, sides, beverages } = this.props;
        let padding = (window.innerWidth >= 824) ? { paddingTop:'150px' } 
                    : (window.innerWidth <= 425) ? { paddingTop:'240px' } 
                    : { paddingTop: '290px' };
        return (
            <div style={padding}>
                <HowToOrder/>
                <MenuList menuItems={menuItems}/>
                    { this.createImageHeader(toppingsHeader) }  
                <ToppingsList toppings={toppings}/>
                    { this.createImageHeader(mochiHeader) }  
                <SidesList sides={sides}/>
                <Beverages beverages={beverages}/>
                {/* <RodalTest/> */}
            </div>
        )
    }
}
