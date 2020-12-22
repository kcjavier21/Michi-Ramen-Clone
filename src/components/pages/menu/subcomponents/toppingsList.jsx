import React, { Component } from 'react';
import '../../../../css/toppingsList.css';

import List from '../../../commons/list.jsx';

export default class ToppingsList extends Component {
    render() {
        return (
            <div className="toppings-list">
                <div className="heading">
                    <h1>TOPPINGS</h1>
                    <h3>BROTH & NOODLES &nbsp; &nbsp; 7.95</h3>
                    <p>great for kids or to build your own</p>
                </div>

                <List list={this.props.toppings} />
            </div>
        )
    }
}
