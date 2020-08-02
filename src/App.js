import React from 'react';
import { ContextProvider } from './context/MyContext.js';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {

    return (
        <ContextProvider>
            <div className="App">
                <Route render={({location}) =>(
                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={950} classNames="fade">
                            <Switch location={location}>
                                <Route exact path="/" component={LandingPage} />
                                <Route path="/dashboard" component={Dashboard} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        </ContextProvider>
    );
}

export default App;
