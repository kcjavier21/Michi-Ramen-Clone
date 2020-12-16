import React, { Component } from 'react';

import '../../../../css/home.css';
// import bowl from '../../../assets/images/hero-image-2.png';
import rightArrow from '../../../../assets/images/right-arrow.png';
import pickRamen from '../../../../assets/images/pick-ramen.png';
import pickBroth from '../../../../assets/images/pick-broth.png';
import addToppings from '../../../../assets/images/add-toppings.png';

export default class HowToOrder extends Component {
    data = [
        { image: pickRamen, class_name: "pick-ramen", key:"pick-ramen", label: "PICK YOUR RAMEN" },
        { image: rightArrow, class_name: "right-arrow", key:"right-arrow", label: "" },
        { image: pickBroth, class_name: "pick-broth", key:"pick-broth", label: "PICK YOUR BROTH" },
        { image: rightArrow, class_name: "right-arrow", key:"right-arrow-2", label: "" },
        { image: addToppings, class_name: "add-toppings", key:"add-toppings", label: "ADD TOPPINGS" }
    ];

    createGridItem = (image, class_name, label, key) => {
        return <div className="order-sys-imgs" key={key}>
                    <img src={`${image}`} className={`${class_name}`}alt={`${class_name}`}/>
                    <p>{`${label}`}</p>
                </div>;
    }

    render() {
        return (
            <div>
                <div className="ordering-system-container">
                    <div className="ordering-system">
                        <h1 className="how-to-order">HOW TO ORDER</h1>                       
                        <div className="order-sys-imgs-container">
                            { this.data.map(item => this.createGridItem(item.image, item.class_name, item.label, item.key)) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
