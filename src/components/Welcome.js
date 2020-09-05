import React from 'react';

const Welcome = () => {
    const fontStyle = {
        fontFamily: "Impact, Arial, Helvetica, sans-serif"
    }

    return(
        <div className="container-fluid welcome-container">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4" style={fontStyle}>Built with care.</h1>
                </div>
                <hr className="welcome-hr"/>
                <div className="col-12 welcome-content">
                    <p className="lead">Welcome to my React Library Website</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;