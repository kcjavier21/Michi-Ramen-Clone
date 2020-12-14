import React, { Component } from 'react';
import '../../css/home.css';
import bowl from '../../assets/images/hero-image-2.png';
import rightArrow from '../../assets/images/right-arrow.png';
import pickRamen from '../../assets/images/pick-ramen.png';
import pickBroth from '../../assets/images/pick-broth.png';
import addToppings from '../../assets/images/add-toppings.png';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="hero">
                    <h1 className="title">MICHI RAMEN</h1>
                    <h4 className="tagline">NEW NORTHWEST AUSTIN LOCATION AT 183 & ANDERSON MILL!</h4>
                    <img src={bowl} className="bowl"/>
                </div>

                <div className="ordering-system">
                    <h1 className="how-to-order">HOW TO ORDER</h1>
                    <div className="order-sys-imgs">
                        <img src={pickRamen} className="pick-ramen"/>  
                            <img src={rightArrow} className="right-arrow-1"/>  
                        <img src={pickBroth} className="pick-broth"/>
                        <img src={rightArrow} className="right-arrow-2"/> 
                        <img src={addToppings} className="add-toppings"/>  
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
