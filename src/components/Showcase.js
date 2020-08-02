import React from 'react';
import placeholder from '../images/placeholder.png';

const Showcase = () => {

    return(
        <div className="container-fluid">
            <div className="row padding">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 1"/>
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">John is an Internet entrepreneur with almost 20 years of experience.</p>
                            <a href="#" className="btn btn-outline-secondary">See Profile</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 2"/>
                        <div className="card-body">
                            <h4 className="card-title">Mary Jo</h4>
                            <p className="card-text">Mary is a designer with almost 10 years of digital design experience.</p>
                            <a href="#" className="btn btn-outline-secondary">See Profile</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={placeholder} alt="project 3"/>
                        <div className="card-body">
                            <h4 className="card-title">Phil Ho</h4>
                            <p className="card-text">Phil is a developer with over 5 years of web development experience.</p>
                            <a href="#" className="btn btn-outline-secondary">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;