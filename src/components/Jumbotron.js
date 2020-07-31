import React, { useState } from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import Sources from './Sources'

const Jumbotron = () => {
    const [showSources, setShowSources] = useState(false);

    const onClick = () => {
        setShowSources(!showSources);
    }

    return(
        <div className="container-fluid">
            <div className="row jumbotron align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    <p className="lead">A web hosting service allows individuals and organizations to make their webiste accessible via the World Wide Web.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                    <button onClick={onClick} className="btn btn-outline-secondary btn-lg">Content</button>
                </div>
            </div>
            <Transition
                native
                items={showSources}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {show => show && (props => (
                    <animated.div style={props}>
                        <Sources />
                    </animated.div>
                ))}
            </Transition>
        </div>
    )
}

export default Jumbotron;

const trasitionStyle = {
    margin: "0"
}