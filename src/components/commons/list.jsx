import React, { Component } from 'react';
import '../../css/list.css';

export default class List extends Component {
    
    createToppingItem = (id, name, price, description) => {    
        return <div className="grid-list-item" key={id}>
                    <span>{`${price}`}</span>
                    <h2>{`${name.toUpperCase()}`}</h2> 
                    <p>{`${description}`}</p>  
                </div>;
    }
    render() {
        return (
            <div>
                <div className="grid-list-container">
                    { this.props.list.map(t => this.createToppingItem(t._id, t.name, t.price, t.description)) }
                </div>
            </div>
        )
    }
}
