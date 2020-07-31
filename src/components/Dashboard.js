import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';

const Dashboard = () => {

    return(
        <div className="container-fluid page dashboard">
            <Navbar />
            <Route exact path="/dashboard" render={Home} />
            <Route exact path="/dashboard/about" render={About} />
            <Footer />
        </div>
    )
}

export default Dashboard;