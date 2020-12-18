import React, { Component } from 'react';
import '../../../../css/menuList.css';

export default class MenuList extends Component {
    
    createMenuItem = (id, type, price, chashus, toppings, bowls) => {
        console.log(type);

       return <div className="grid-menu-items">                        
                        <h2 className="category">{`${type.toUpperCase()}`}</h2>
                        <p className="price">{`${price}`}</p>
                        <div className="chashus">
                            <ul>CHOICE OF CHASHU:
                                { chashus.map(c => <li>{`${c}`}</li>) }
                            </ul>
                        </div>
                        <div className="toppings">
                            <ul>TOPPINGS:
                                { toppings.map(t => <li>{`${t}`}</li>) }
                            </ul>
                        </div>
                        <p className="bowls">
                            { bowls.map(b => <>{`${b.toUpperCase()}`}<br/></>) }
                        </p>
                    </div>;
    }

    render() {
        const { menuItems } = this.props;
        //const { _id, type, price, chashu, toppings, bowls } = this.props.menuItems;

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
