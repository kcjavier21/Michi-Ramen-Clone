import React, { Component } from 'react';
import '../../../../css/beverages.css';

export default class Beverages extends Component {
    state = {
        beer: {
            id: '3001',
            name: 'Beer',
            items: ['Draft', 'Japanese Bottles']
        },
        tea: {
            id: '3002',
            name: 'Tea',
            items: ['Cold Tea', 'Hot Tea']
        },
        sake: {
            id: '3003',
            name: 'Sake',
            items: ['']
        },
        wine: {
            id: '3004',
            name: 'Wine',
            items: ['']
        },
        temp: {
            id: '',
            name: '',
            items: ['']
        },
        activeObject:{}
    }

    changeTempValue = (beverage) => {
        let temp = this.state.temp;
        temp = beverage;
        
        this.setState({ temp });
    }

    changeColor = (selection) => {
        let toggle = false;

        toggle = !toggle;

        return toggle === true ? '#ffc227' : 'rgb(30, 30, 30)';
    }

    generateBeverageList = (beverage) => {
        return <li key={beverage}>{`${beverage.toUpperCase()}`}</li>;
    }

    render() {
        const { beer, tea, sake, wine, temp } = this.state;
        const { changeTempValue, generateBeverageList } = this;

        // function toggleActive(index) {
        //     let activeObj = this.state.activeObj;
        //     activeObj 
        // }

        return (
            <div className="beverages-container">

                <div className="beverages-grid">
                    <div className="beverages-grid-item">
                        <div className="beverages-category">
                            <li onClick={(e) => changeTempValue(beer)}>
                                BEER
                            </li>
                            <li onClick={(e) => changeTempValue(sake)}>SAKE</li>
                            <li onClick={(e) => changeTempValue(wine)}>WINE</li>
                            <li onClick={(e) => changeTempValue(tea)}>TEA</li>
                        </div>
                    </div>

                    <div className="beverages-name">
                        { temp.items.map(b => generateBeverageList(b)) }
                    </div>
                </div>
                
            </div>
        )
    }
}
