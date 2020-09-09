import React, { useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext.js';
import { NavLink } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import Footer from './Footer';
import RelayBanner from '../images/Relayforjustice.png';
import RFJdesktop from '../images/RFJdesktop.png';
import RFJmobile1 from '../images/RFJmobile1.png';
import RFJmobile3 from '../images/RFJmobile3.png';
import RFJmobile4 from '../images/RFJmobile4.png';
import RFJmobile5 from '../images/RFJmobile5.png';
import RFJtestimonial from '../images/RFJtestimonial.png';

const RelayForJustice = () => {
    const { setPage } = useContext(MyContext);

    useEffect(() =>{
        setPage({
            home: false,
            about: false,
            projects: true
        });
    }, [setPage]);

    const textArea1 = "As the front-end engineer for the mobile version of our application, I was responsible for both the design, and development of the mobile interface. Focused on user interaction and application performance, Relay for Justice provides a welcoming and intuitive experience."

    const textArea2 = "By the second week of our launch, Relay for Justice had accumulated over 400 active users and 6,000 miles worth of contributed miles."

    return(
        <div className="container-fluid dashboard-body">
            <div className="container-fluid relay-for-justice">
                <div className="row">
                    <div className="col-12 text-left back-btn-div">
                        <NavLink to="/projects" className="back-btn"><i className="fas fa-undo"></i> Back to Projects</NavLink>
                    </div>
                </div>
                <div className="row text-center relay-banner">
                    <div className="col-12 relay-banner-col">
                        <img className="d-block w-100 rounded" src={RelayBanner} alt="Relay For Justice Banner"/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 large-phone-container">
                        <img className="d-block w-100" src={RFJmobile4} alt="Relay for Justice mobile screenshot" />
                    </div>
                    <div className="col-12 col-md-8 relay-intro-text">
                        <h2>About</h2>
                        <p>Hosted by <ExternalLink className="rfj-link" href="https://www.legalaidchicago.org/">Legal Aid Chicago</ExternalLink>’s Ambassadors Board, Relay for Justice is a virtual walk, run, and bike event that connects and energizes each of us, as we continue our daily advocacy for civil justice in the current much-changed state of the world.</p>
                        <p>{textArea1}</p>
                        <p>{textArea2}</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-4 text-left relay-text">
                        <h2>Join Us</h2>
                        <p>Visit our site at <ExternalLink className="rfj-link" href="https://relayforjustice.com/">Relayforjustice.com</ExternalLink>. Invite your friends and family to participate in our next relay!</p>
                    </div>
                    <div className="col-12 col-md-8 rfj-desktop-container">
                        <img className="d-block w-100 rounded rfj-desktop" src={RFJdesktop} alt="Relay for Justice desktop screenshot" />
                    </div>
                </div>
                <div className="row phone-row justify-content-center">
                    <div className="col-12 col-md-3 phone-container">
                        <img className="d-block w-100" src={RFJmobile1} alt="Relay for Justice mobile screenshot" />
                    </div>
                    <div className="col-12 col-md-3 phone-container">
                        <img className="d-block w-100" src={RFJmobile5} alt="Relay for Justice mobile screenshot" />
                    </div>
                    <div className="col-12 col-md-3 phone-container">
                        <img className="d-block w-100" src={RFJmobile3} alt="Relay for Justice mobile screenshot" />
                    </div>
                </div>
                <div className="row align-items-center text-left">
                    <div className="col-12 col-md-6 relay-testimonial-text">
                        <h2>Testimonial</h2>
                        <p>Big thank you to Legal Aid for their positive feedback and support. Shout out to my fellow devolopers at Chi-IT who made this happen.</p>
                    </div>
                    <div className="col-12 col-md-6 relay-testimonial-container">
                        <img className="d-block w-100" src={RFJtestimonial} alt="Relat for Justice testimonial" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RelayForJustice;