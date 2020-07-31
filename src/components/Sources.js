import React from 'react';

const Sources = () => {

    return(
        <div className="container-fluid sources">
            <div className="row text-center">
                <div className="col-xs-12 col-sm-6 col-md-4 source-box">
                    <i className="fas fa-code"></i>
                    <h3>HTML5</h3>
                    <p>Built with the latest version of HMTL, HTML5.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 source-box">
                    <i className="fas fa-bold"></i>
                    <h3>BOOTSTRAP</h3>
                    <p>Built with the latest version of Bootstrap, Bootstrap 4.</p>
                </div>
                <div className="col-xs-12 col-md-4 source-box">
                    <i className="fab fa-css3"></i>
                    <h3>CSS3</h3>
                    <p>Built with the latest version of CSS, CSS3.</p>
                </div>
            </div>
        </div>
    )
}

export default Sources;