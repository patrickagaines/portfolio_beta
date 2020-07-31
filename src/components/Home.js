import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import Jumbotron from './Jumbotron';
import Welcome from './Welcome';

const Home = () => {

    return(
        <div className="container-fluid dashboard-body">
            <ImageSlider />
            <Jumbotron />
            <Welcome />
        </div>
    )
}

export default Home;