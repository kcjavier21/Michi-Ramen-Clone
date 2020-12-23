import React, { Component } from 'react';
import '../../css/list.css';

export default class List extends Component {
    createListItem = (id, name, price, description) => {    
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
                    { this.props.list.map(l => this.createListItem(l._id, l.name, l.price, l.description)) }
                </div>
            </div>
        )
    }
}
