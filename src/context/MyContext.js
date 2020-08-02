import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {
    const[route, setRoute] = useState([
        {home: false},
        {about: false},
        {projects: false}
    ]);

    return(
        <MyContext.Provider value={[route, setRoute]}>
            {props.children}
        </MyContext.Provider>
    );
}