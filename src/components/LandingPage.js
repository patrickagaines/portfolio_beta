import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className="container-fluid page landing-page">
            <header className="landing-header-container">
                <h1 className="landing-header">Welcome To My Site</h1>
            </header>
            <div className="landing-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim voluptate fuga iste labore architecto aperiam totam mollitia adipisci, repellendus praesentium voluptates vitae voluptatem quae ex nisi illo iure dignissimos!
            </div>
            <NavLink to="/dashboard" activeClassName="active" className="btn landing-btn">Enter Here</NavLink>
        </div>
    )
}


export default LandingPage;