import React from 'react';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12">
                        <hr className="light-100"/>
                        <h5>Contact Info</h5>
                        <hr className="light-100"/>
                    </div>
                    <div className="col-4">
                        <a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-4">
                        <a href="#"><i className="fa fa-envelope-square" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-4">
                        <a href="#"><i className="fab fa-github" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-12">
                        <hr className="light-100"/>
                        <h5>&copy; 2020 Patrick Gaines</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;