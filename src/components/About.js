import React, {useEffect, useContext} from 'react';
import { MyContext } from '../context/MyContext.js';
import Footer from './Footer';

const About = () => {
    const{ setPage } = useContext(MyContext);

    useEffect(() =>{
        setPage({
            home: false,
            about: true,
            projects: false
        });
    }, [setPage]);

    return(
        <div className="container-fluid dashboard-body">
            This is the About Page
            <Footer />
        </div>
    )
}

export default About;