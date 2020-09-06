import React from 'react';

const Sources = () => {

    return(
        <div className="container-fluid sources">
            <div className="row text-center">
                <div className="col-xs-12 col-sm-6 col-md-4 source-box">
                    <i className="fab fa-react"></i>
                    <h3 className="tech-header">React</h3>
                    {/* <p>Built with the latest version of HMTL, HTML5.</p> */}
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 source-box">
                    <i className="fab fa-aws"></i>
                    <h3 className="tech-header">Amazon Web Services</h3>
                    {/* <p>Built with the latest version of Bootstrap, Bootstrap 4.</p> */}
                </div>
                <div className="col-xs-12 col-md-4 source-box">
                    <i className="fab fa-python"></i>
                    <h3 className="tech-header">Python</h3>
                    {/* <p>Built with the latest version of CSS, CSS3.</p> */}
                </div>
            </div>
        </div>
    )
}

export default Sources;