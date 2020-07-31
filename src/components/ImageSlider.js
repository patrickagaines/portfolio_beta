import React from 'react';
import Portrait from '../images/portrait.png';
import ReactLogo from '../images/react.png';
import ReactRouterLogo from '../images/react-router.png';


const ImageSlider = () => {
    
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
                        <img src={Portrait}/>
                        <div className="carousel-caption">
                            <h1 className="display-2">Developer</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ReactLogo}/>
                    </div>
                    <div className="carousel-item">
                        <img src={ReactRouterLogo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;