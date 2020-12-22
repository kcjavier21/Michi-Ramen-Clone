import React, { Component } from 'react';

import Hero from './subcomponents/hero.jsx';
import HowToOrder from '../menu/subcomponents/howToOrder.jsx';
import MenuList from '../menu/subcomponents/menuList.jsx';

import FillerImages from '../../commons/fillerImages.jsx';

import '../../../css/home.css';

import Spices from '../../../assets/images/Spices.jpg';
import Broth from '../../../assets/images/Broth.jpg';
import Mochi from '../../../assets/images/Mochi.jpg';

export default class Home extends Component {
    render() {
        const images = [Spices, Broth, Mochi];
        return (
            <React.Fragment>
                <Hero/>
                <HowToOrder/>
                <MenuList menuItems={this.props.menuItems}/>
                <FillerImages images={images}/>
            </React.Fragment>
        )
    }
}
