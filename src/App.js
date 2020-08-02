import React from 'react';
import { ContextProvider } from './context/MyContext.js';
import { Spring } from 'react-spring/renderprops';
// import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

import './App.css';

function App() {

    return (
        <ContextProvider>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ duration: 1000 }}
            >
                {props => (
                <div style={props} className="App">
                    <Dashboard />
                </div>
                )}
            </Spring>
        </ContextProvider>
    );
}

export default App;
