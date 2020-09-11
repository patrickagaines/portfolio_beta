import React from 'react';
import { NavLink } from 'react-router-dom';
import LAlogo from '../images/legalaidlogo.png';
import RHcard from '../images/roadhousecard.png'


const Showcase = () => {

    return(
        <div className="container-fluid showcase">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <img className="card-img-top" src={LAlogo} alt="Legal Aid Chicago Logo"/>
                        <div className="card-body">
                            <h4 className="card-title">Relay For Justice</h4>
                            <p className="card-text">Virtual walk, run, bike event hosted by Legal Aid Chicago</p>
                            <NavLink to="/relayforjustice"><button className="card-button btn">See Profile</button></NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card">
                        <img className="card-img-top" src={RHcard} alt="Route 41 Roudhouse"/>
                        <div className="card-body">
                            <h4 className="card-title">Route 41 Roadhouse</h4>
                            <p className="card-text">Southern Style Pit Barbeque Restaurant in Wadsworth, IL.</p>
                            <button className="card-button btn">See Profile</button>
                        </div>
                    </div>
                </div>

                {/* <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 3"/>
                        <div className="card-body">
                            <h4 className="card-title">Game App</h4>
                            <p className="card-text">Description of my Game App.</p>
                            <button className="card-button btn">See Profile</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Showcase;