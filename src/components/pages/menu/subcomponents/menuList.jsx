import React, { Component } from 'react';
import '../../../../css/menuList.css';

export default class MenuList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="menu-list">
                    <h1 className="ramenBowls">RAMEN BOWLS</h1>
                
                <div className="grid-menu-container">
                    <div className="grid-menu-items">                        
                        <h2 className="category">MICHI</h2>
                        <p className="price">10.95</p>
                        <div className="chashus">
                            <ul>CHOICE OF CHASHU:
                                <li>chasu 1</li>
                                <li>chasu 2</li>
                                <li>chasu 3</li>
                                <li>chasu 4</li>
                            </ul>
                        </div>

                        <div className="toppings">
                            <ul>TOPPINGS:
                                <li>toppings 1</li>
                                <li>toppings 2</li>
                                <li>toppings 3</li>
                                <li>toppings 4</li>
                            </ul>
                        </div>

                        <p className="bowls">SHOYU TONKOTSU</p>

                    </div>


                    <div className="grid-menu-items">                        
                        <h2 className="category">MICHI</h2>
                        <p className="price">10.95</p>
                        <div className="chashus">
                            <ul>CHOICE OF CHASHU:
                                <li>chasu 1</li>
                                <li>chasu 2</li>
                                <li>chasu 3</li>
                                <li>chasu 4</li>
                            </ul>
                        </div>

                        <div className="toppings">
                            <ul>TOPPINGS:
                                <li>toppings 1</li>
                                <li>toppings 2</li>
                                <li>toppings 3</li>
                                <li>toppings 4</li>
                            </ul>
                        </div>

                        <p className="bowls">SHOYU TONKOTSU</p>

                    </div>
                </div>
                
                
                </div>
            </React.Fragment>
        )
    }
}
