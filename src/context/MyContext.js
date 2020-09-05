import React, { useState, createContext } from 'react';

export const MyContext = createContext();

export const ContextProvider = (props) => {
    const[page, setPage] = useState({
        home: false,
        about: false,
        projects: false
    });

    const[contact, setContact] = useState(false);

    const toggleContact = () => {
        setContact(!contact);

    }

    return(
        <MyContext.Provider value={{page, setPage, contact, setContact, toggleContact}}>
            {props.children}
        </MyContext.Provider>
    );
}