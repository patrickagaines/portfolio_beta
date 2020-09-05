import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext.js';

const Footer = () => {

    const{contact, setContact} = useContext(MyContext);

    const toggleContact = () => {
        setContact(!contact);

    }

    return(
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-12">
                            <hr className="light-100"/>
                            <h5>Connect</h5>
                            <hr className="light-100"/>
                        </div>
                        <div className="col-4">
                            <a href="https://www.linkedin.com/in/patrick-gaines-1420b31b0/"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                        <div className="col-4">
                            <p className="footer-icon" onClick={toggleContact}><i className="fa fa-envelope-square" aria-hidden="true"></i></p>
                        </div>
                        <div className="col-4">
                            <a href="https://github.com/PatrickAGaines"><i className="fab fa-github" aria-hidden="true"></i></a>
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