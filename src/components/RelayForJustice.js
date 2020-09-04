import React, { useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext.js';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import RelayLogo from '../images/Relayforjustice.png';

const RelayForJustice = () => {
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
            <div className="container-fluid relay-for-justice">
                <div className="row">
                    <div className="col-12 text-left back-btn-div">
                        <NavLink to="/projects" className="back-btn"><i class="fas fa-undo"></i> Back to Projects</NavLink>
                    </div>
                </div>
                <div className="row text-center relay-banner">
                    <div className="col-12 relay-banner-col">
                        <img className="w-100" src={RelayLogo} alt="Relay For Justice Banner"/>
                    </div>
                </div>
                <div className="row relay-section">
                    <div className="col-xs-12 col-md-8 text-left">
                        <p>Hosted by Legal Aid Chicago’s Ambassadors Board, Relay for Justice is a virtual walk, run, and bike event that will connect and energize each of us, as we continue our daily advocacy for civil justice in the current much-changed state of the world.</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        Image Goes Here
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RelayForJustice;