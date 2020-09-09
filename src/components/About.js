import React, {useEffect, useContext} from 'react';
import { MyContext } from '../context/MyContext.js';
import Footer from './Footer';
import Collage from '../images/logocollagetest4.png';
import CompleteCare from '../images/completecarecartoon.jpeg';

const About = () => {
    const{ setPage } = useContext(MyContext);

    useEffect(() =>{
        setPage({
            home: false,
            about: true,
            projects: false
        });
    }, [setPage]);

    const technologyBody = "Full-stack web developer specializing in implementing React and providing fluid, front end user experience. Deep knowledge of design and user interface. Skilled in creating production level REST and GraphQL APIs. Accomplished at creating fully functional, secure ecommerce web sites. Certified AWS Cloud Practitioner with comprehension of both traditional and serverless cloud platforms. Experienced in Python, Django, and MTV Framework. Proficient in Photoshop."

    const automotiveBody = "Six years of experience as a full-time mechanic. What began with simple brake jobs, tune-ups, and suspension repairs, quickly grew into a passion and eagerness to hone and perfect my craft. I became proficient in advanced electrical testing and diagnostics as well as custom wiring modifications. Successfully completed engine rebuilds, exhaust fabrications, and emissions repairs. Programmed and modified Engine Control Modules by updating volumetric efficiency tables, ignition timing parameters, and target lambda air-fuel ratios. My career as a technician taught me the invaluable skill of learning a new system or component, and breaking down its functions for troubleshooting, repair, and improvement."

    const realEstateBody = "Currently licensed Real Estate Broker and an active member of the Chicago Association of Realtors. Specializing in residential leasing, I work directly with the vast majority of property management companies on the north side of Chicago as well as many private owners. My process begins with obtaining a solid understanding of my clients’ wants and needs, and continues through finding them the perfect home, to negotiating the final details of their offer and contract. My role as an agent has pushed me to develop my skills in listening, communication, and consultation. It has also awarded me a newfound appreciation for my city and the people who live here. I continue to work towards further growth in the field and am excited to see what lies in the future."

    return(
        <div className="container-fluid dashboard-body">
            <div className="about-me">
                <div className="row about-section align-items-center">
                    <div className="col-xsm-12 col-md-6 about-text">
                        <h2 className="about-greeting">Hello,</h2>
                        <h2 className="about-greeting greeting-bottom">I'm Patrick</h2>
                        <h2>Web Development</h2>
                        <p>{technologyBody}</p>
                    </div>
                    <div className="col-xsm-12 col-md-6 collage-container">
                        <img className="d-block w-100 collage" src={Collage} alt="Collage of Tech Logos" />
                    </div>
                </div>
                <div className="row about-text-realestate">
                    <div className="col-12">
                        <h2>Real Estate</h2>
                        <p>{realEstateBody}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <figure className="figure">
                            <div className="fixed-wrap">
                                <div id="fixed">
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="row auto-row about-section align-items-center">
                    <div className="col-xs-12 col-md-6 about-text">
                        <h2>Automotive</h2>
                        <p>{automotiveBody}</p>
                    </div>
                    <div className="col-xs-12 col-md-6 cc-container">
                        <img className="d-block w-100 complete-picture" src={CompleteCare} alt="1969 Ford Galaxy at Complete Care" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;