import React, { createContext, useState, useContext, useEffect } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/filmes')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Erro ao buscar os filmes:', error));
    }, []
    );

    const addCard = (newCard) => {
        fetch('http://localhost:3001/filmes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(newCard),
        })
        .then((response) => response.json())
        .then((data) => setCards((prevCards) => [...prevCards, data]));
    };

    const updateCard = (id, updatedCard) => {
        fetch(`http://localhost:3001/filmes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(updatedCard),
        })
        .then((response) => response.json())
        .then((data) => 
            setCards((prevCards) => 
                prevCards.map(
                    (card) => (card.id === id ? data : card))));
    };

    const deleteCard = (id) => {
        fetch(`http://localhost:3001/filmes/${id}`, { method: 'DELETE' })
            .then(() =>
                setCards((prevCards) => prevCards.filter((card) => card.id !== id))
            );
    };

    return (
        <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCards = () => useContext(CardContext);