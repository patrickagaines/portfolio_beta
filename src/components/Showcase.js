import React from 'react';
import placeholder from '../images/placeholder.png';

const Showcase = () => {

    return(
        <div className="container-fluid showcase">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 1"/>
                        <div className="card-body">
                            <h4 className="card-title">Social Media App</h4>
                            <p className="card-text">Description of my Social Media App.</p>
                            <a href="#" className="btn btn-outline-secondary">See Profile</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 2"/>
                        <div className="card-body">
                            <h4 className="card-title">Ecommerce App</h4>
                            <p className="card-text">Description of my Ecommerce App.</p>
                            <a href="#" className="btn btn-outline-secondary">See Profile</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 3"/>
                        <div className="card-body">
                            <h4 className="card-title">Game App</h4>
                            <p className="card-text">Description of my Game App.</p>
                            <a href="#" className="btn btn-outline-secondary">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;