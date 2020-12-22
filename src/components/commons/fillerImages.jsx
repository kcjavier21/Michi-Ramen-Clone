import React, { Component } from 'react';
import '../../css/fillerImages.css';

class FillerImages extends Component {
        generateFillerImages = (image) => {
                return <div className="filler-imgs" key={`${image}`}>                   
                            <img src={`${image}`} alt={`${image}`}></img>
                        </div>;
        }

        render() { 
            return ( 
                <div className="filler-imgs-container">
                        { this.props.images.map(i => this.generateFillerImages(i)) }
                </div>
        );
    }
}
 
export default FillerImages;