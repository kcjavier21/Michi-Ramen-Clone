import React, { Component } from 'react';
import '../../../../css/beverages.css';

export default class Beverages extends Component {
    state = {
        activeObject:this.props.beverages[0]
    }
    
    generateBeverageCategory = (elements, index) => {
        return <li key={index} 
                    onClick={() => this.toggleActive(index)}
                    className={this.toggleActiveStyles(index)} 
                >
                    {`${elements.category}`}
                </li>;
    }

    generateBeverageList = (beverage) => {
        return <li key={beverage}>{`${beverage.toUpperCase()}`}</li>;
    }

    toggleActive = (index) => {
        let active = this.state.activeObject;
        active = this.props.beverages[index];

        this.setState({ activeObject: active });
    }

    toggleActiveStyles = (index) => {
        if(this.props.beverages[index] === this.state.activeObject) {
            return 'active';
        } else {
            return 'inactive';
        }
    }

    render() {
        const { activeObject } = this.state;
        const { beverages } = this.props;
        const { generateBeverageList } = this;

        return (
            <div className="beverages-container">
                <div className="beverages-grid">
                    <div className="beverages-grid-item">
                        <div className="beverages-category">
                            { beverages.map((elements, index) => 
                                this.generateBeverageCategory(elements, index)
                            )}
                        </div>
                    </div>
                    <div className="beverages-name">
                        { activeObject.items.map(b => generateBeverageList(b)) }
                    </div>
                </div>    
            </div>
        )
    }
}
