import React, { Component } from 'react';

import Hero from './subcomponents/hero.jsx';
import HowToOrder from './subcomponents/howToOrder.jsx';
import MenuList from '../menu/subcomponents/menuList.jsx';

import '../../../css/home.css';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero/>
                <HowToOrder/>
                <MenuList/>
            </React.Fragment>
        )
    }
}
