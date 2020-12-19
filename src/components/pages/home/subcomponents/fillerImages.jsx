import React from 'react';

import '../../../../css/fillerImages.css';

import Spices from '../../../../assets/images/Spices.jpg';
import Broth from '../../../../assets/images/Broth.jpg';
import Mochi from '../../../../assets/images/Mochi.jpg';

const FillerImages = () => {
    return ( 
            <div className="filler-imgs-container">
                    <div className="filler-imgs">                   
                            <img src={Spices}></img>
                    </div>
                    <div className="filler-imgs">                   
                            <img src={Broth}></img>
                    </div>
                    <div className="filler-imgs">                   
                            <img src={Mochi}></img>
                    </div>
            </div>
     );
}
 
export default FillerImages;