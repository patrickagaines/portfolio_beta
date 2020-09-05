import React from 'react';
import placeholder from '../images/placeholder.png';
import { NavLink } from 'react-router-dom';
import RFJ from '../images/RFJcard.png';

const Showcase = () => {

    return(
        <div className="container-fluid showcase">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={RFJ} alt="project 1"/>
                        <div className="card-body">
                            <h4 className="card-title">Relay For Justice</h4>
                            <p className="card-text">Virtual walk, run, bike event hosted by Legal Aid Chicago</p>
                            <NavLink to="/relayforjustice"><button className="card-button btn">See Profile</button></NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 2"/>
                        <div className="card-body">
                            <h4 className="card-title">Ecommerce App</h4>
                            <p className="card-text">Description of my Ecommerce App.</p>
                            <button className="card-button btn">See Profile</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 3"/>
                        <div className="card-body">
                            <h4 className="card-title">Game App</h4>
                            <p className="card-text">Description of my Game App.</p>
                            <button className="card-button btn">See Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;