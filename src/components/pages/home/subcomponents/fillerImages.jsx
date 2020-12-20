import React, { Component } from 'react';

import '../../../../css/fillerImages.css';

import Spices from '../../../../assets/images/Spices.jpg';
import Broth from '../../../../assets/images/Broth.jpg';
import Mochi from '../../../../assets/images/Mochi.jpg';


class FillerImages extends Component {
        generateFillerImages = (image) => {
                return <div className="filler-imgs">                   
                            <img src={`${image}`} alt={`${image}`}></img>
                        </div>;
        }

        render() { 
            return ( 
                <div className="filler-imgs-container">
                        { this.generateFillerImages(Spices) }
                        { this.generateFillerImages(Broth) }
                        { this.generateFillerImages(Mochi) }
                </div>
        );
    }
}
 
export default FillerImages;