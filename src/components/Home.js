import React, { useContext, useEffect } from 'react';
import { MyContext } from '../context/MyContext.js';
import ImageSlider from './ImageSlider';
import Jumbotron from './Jumbotron';
import Welcome from './Welcome';
import Footer from './Footer';

const Home = () => {
    const[page, setPage] = useContext(MyContext);

    useEffect(() =>{
        setPage([
            {home: true},
            {about: false},
            {projects: false}
        ]);
    }, []);

    return(
        <div className="container-fluid dashboard-body">
            <ImageSlider />
            <Jumbotron />
            <Welcome />
            <Footer />
        </div>
    )
}

export default Home;