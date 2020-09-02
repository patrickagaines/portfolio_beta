import React, { useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext.js';
import ProjectBanner from './ProjectBanner';
import Showcase from './Showcase';
import Footer from './Footer';

const Projects = () => {
    const[page, setPage] = useContext(MyContext);

    useEffect(() =>{
        setPage([
            {home: false},
            {about: false},
            {projects: true}
        ]);
    }, []);

    return(
        <div className="container-fluid dashboard-body">
            <ProjectBanner />
            <Showcase />
            <Footer />
        </div>
    )
}

export default Projects;