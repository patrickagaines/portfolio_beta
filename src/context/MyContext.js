import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {
    const[page, setPage] = useState({
        home: false,
        about: false,
        projects: false
    });

    const[contact, setContact] = useState(false);

    return(
        <MyContext.Provider value={{page, setPage, contact, setContact}}>
            {props.children}
        </MyContext.Provider>
    );
}