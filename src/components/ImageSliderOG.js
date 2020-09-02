import React from 'react';
import Portrait from '../images/portrait.png';
import ReactLogo from '../images/react.png';
import ReactRouterLogo from '../images/react-router.png';


const ImageSliderOG = () => {
    
    return(
        <div className="container-fluid image-slider">
            <div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Portrait} alt="Developer Logo"/>
                        <div className="carousel-caption" data-interval="5000">
                            <h1 className="display-2">Developer</h1>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="3000">
                        <img src={ReactLogo} alt="React Logo"/>
                    </div>
                    <div className="carousel-item" data-interval="3000">
                        <img src={ReactRouterLogo} alt="React-Router Logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSliderOG;