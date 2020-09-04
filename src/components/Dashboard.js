import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import RelayForJustice from './RelayForJustice';

const Dashboard = () => {

    return(
        <div className="container-fluid page dashboard">
            <Navbar />
                <Route render={({location}) =>(
                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={950} classNames="fade">
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/About" component={About} />
                                <Route path="/Projects" component={Projects} />
                                <Route path="/relayforjustice" component={RelayForJustice} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
        </div>
    )
}

export default Dashboard;