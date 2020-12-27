import React, { Component } from 'react';
import '../../../css/about.css';

import altImage from '../../../assets/images/Alt-image.jpg';
import altImage2 from '../../../assets/images/Alt-image-2.jpg';
import altImage3 from '../../../assets/images/Alt-image-3.jpg';
import toppings2 from '../../../assets/images/toppings-2.jpg';

export default class About extends Component {
    createImageHeader = (image) => {
        return <div style={
            {
                backgroundImage: `url(${image})`,
                backgroundSize: '100%',
                backgroundPosition: 'center',
                height: '27vw',
                maxHeight: '900px'
            }
        } />
    }

    createFillerImages = (image, index) => {
        return <div className="fill-img-item">
                    <img src={image} alt={index}/>
                </div>;
    }

    generateArticle = (article) => {
        return <div className="article">
                    <h1 className="article-title">{`${article.title.toUpperCase()}`}</h1>
                    <p className="article-content">
                        { article.content }
                    </p>
                </div>
        
               
    }

    render() {
        let padding = (this.props.innerWidth >= 824) ? { padding:'0px 0 100px 0', } 
                    : (this.props.innerWidth <= 425) ? { padding:'98px 0' } 
                    : { padding: '140px 0 100px 0' };

        let images = [altImage, altImage2, altImage3];

        console.log(this.props.innerWidth);
        return (
            <div className="about-page" style={padding}>
                { this.createImageHeader(toppings2) }
            
                { this.generateArticle(this.props.about[0]) }

                <div className="fill-img-container">
                    { images.map((image, index) => this.createFillerImages(image, index)) }
                </div>

                { this.generateArticle(this.props.about[1]) }

                { this.createImageHeader(toppings2) }

            </div>
        )
    }
}