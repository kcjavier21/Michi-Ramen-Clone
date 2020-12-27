import React, { Component } from 'react';
import '../../../css/locations.css';
import FillerImages from '../../commons/fillerImages.jsx';

export default class Locations extends Component {

    generateLocationList = (location) => {
        return <div className="grid-location-item" key={location._id}>
                        <h2>{`${location.name.toUpperCase()}`}</h2>

                        <div className="info">
                            <h3>Address</h3>
                            <p>{`${location.address.road}`}
                                <br/>{`${location.address.city}`}
                                <br/>{`${location.address.building}`}
                            </p>
                        </div>

                        <div className="info">
                            <h3>Phone Number</h3>
                            <p>{`${location.phone}`}
                            </p>
                        </div>

                        <div className="info">
                            <h3>Hours of Operation</h3>
                            <p>{`${location.hours.frequency}`}
                                <br/>{`${location.hours.timeRange}`}
                            </p>
                        </div>

                        <div className="info">
                            <h3>Services</h3>
                            <p>{`${location.services[0]}`}
                                <br/>{`${location.services[1]}`}
                            </p>
                        </div>
                    </div>;
    }

    render() {
        let padding = (this.props.innerWidth >= 824) ? { padding:'80px 0 150px 0', } 
                    : (this.props.innerWidth <= 425) ? { padding:'160px 0' } 
                    : { padding: '200px 0' };
        return (
            <div className="about" style={padding}>
                <h1>LOCATIONS</h1>

                <div className="grid-location-container">
                    {this.props.locations.map(location => this.generateLocationList(location)) }
                </div>
                
            </div>
        )
    }
}
