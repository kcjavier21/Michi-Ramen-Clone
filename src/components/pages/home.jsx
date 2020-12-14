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
                    <img src={bowl} className="bowl" alt="bowl"/>
                </div>


                <div className="ordering-system-container">
                    <div className="ordering-system">
                        
                        <h1 className="how-to-order">HOW TO ORDER</h1>
                        
                        <div className="order-sys-imgs">

                            <div className="order-sys-imgs-container">
                                <img src={pickRamen} className="pick-ramen" alt="pick-ramen"/>
                                <p>PICK YOUR RAMEN</p>
                            </div>

                            <div className="order-sys-imgs-container">
                                <img src={rightArrow} className="right-arrow" alt="right-arrow"/>  
                            </div>

                            <div className="order-sys-imgs-container">
                                <img src={pickBroth} className="pick-broth" alt="pick-broth"/>
                                <p>PICK YOUR BROTH</p>
                            </div>

                            <div className="order-sys-imgs-container">
                                <img src={rightArrow} className="right-arrow" alt="right-arrow"/> 
                            </div>

                            <div className="order-sys-imgs-container">
                                <img src={addToppings} className="add-toppings" alt="add-toppings"/>  
                                <p>ADD TOPPINGS</p>
                            </div>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        )
    }
}
