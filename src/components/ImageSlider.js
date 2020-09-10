import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Portrait from '../images/portrait.png';
import CPU from '../images/CPU.png';
import CPU2 from '../images/laptop.png';

const ImageSlider = () => {
    const fontStyle = {
        fontFamily: "Bookman, Arial, Helvetica, sans-serif"
    }

    return(
        <div className="container-fluid image-slider">
            <Carousel interval={3000} pause='false'>
                <Carousel.Item>
                    <img className="d-block w-100" src={Portrait} alt="Developer Logo" />
                    <Carousel.Caption className="carousel-caption">
                        <h1 style={fontStyle}>Developer</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={CPU} alt="Developer Logo" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={CPU2} alt="Developer Logo" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider;
