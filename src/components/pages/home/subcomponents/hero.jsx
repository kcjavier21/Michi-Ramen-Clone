import React from 'react';
import '../../../../css/home.css';
import bowl from '../../../../assets/images/hero-image-2.png';
//import logo from '../../../../assets/images/logo.png';

const Hero = () => {
    return ( 
        <div className="hero">
            {/* <img src={logo} className="logo-in-hero" alt="logo-in-hero"/> */}
            <h1 className="title">MICHI RAMEN</h1>
            <h4 className="tagline">NEW NORTHWEST AUSTIN LOCATION AT 183 & ANDERSON MILL!</h4>
            <img src={bowl} className="bowl" alt="bowl"/>
        </div> 
    );
}
 
export default Hero;