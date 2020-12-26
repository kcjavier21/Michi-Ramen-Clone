import React, { Component } from 'react';
import '../../../../css/menuList.css';

export default class MenuList extends Component {
    
    createMenuItem = (id, type, price, chashus, toppings, bowls) => {
       return <div className="grid-menu-items" key={id}>                        
                <h2 className="category">{`${type.toUpperCase()}`}</h2>
                <p className="price">{`${price}`}</p>
                <ul className="chashus">
                    CHOICE OF CHASHU:
                        { chashus.map(c => <li key={c}>{`${c}`}</li>) }
                </ul>
                <ul className="toppings">
                    TOPPINGS:
                        { toppings.map(t => <li key={t}>{`${t}`}</li>) }  
                </ul>
                <ul className="bowls">
                    { bowls.map(b => <li key={b}>{`${b.toUpperCase()}`}</li>) }
                </ul>
            </div>;
    }

    render() {
        const { menuItems } = this.props;

        return (
            <React.Fragment>
                <div className="menu-list">
                    <h1 className="ramenBowls">RAMEN BOWLS</h1>
                 <div className="grid-menu-container">
                 { menuItems.map(item => this.createMenuItem(item._id, item.type, item.price, item.chashu, item.toppings, item.bowls)) }
                    
                </div>
        
                </div>
            </React.Fragment>
        )
    }
}
