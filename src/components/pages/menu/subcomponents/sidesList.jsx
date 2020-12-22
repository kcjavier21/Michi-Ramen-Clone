import React, { Component } from 'react';
import '../../../../css/sidesList.css';

import List from '../../../commons/list.jsx';

export default class SidesList extends Component {
    render() {
        return (
            <div className="sides-list">
                <div className="heading">
                    <h1>SIDES</h1>
                </div>

                <List list={this.props.sides} />
            </div>
        )
    }
}