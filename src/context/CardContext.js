import React, { createContext, useState, useContext } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    const addCard = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]);
    }


    return (
        <CardContext.Provider value={{ cards, addCard }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCards = () => useContext(CardContext);