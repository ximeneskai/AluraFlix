import { createContext, useContext, useEffect, useState } from "react";

// Criação do contexto
const CardContext = createContext();

// Hook para usar o contexto
export const useCards = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/filmes')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Erro ao buscar os filmes:', error));
    }, []);

    const addCard = (newCard) => {
        return fetch('http://localhost:3001/filmes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard),
        })
            .then((response) => response.json())
            .then((data) => {
                setCards((prevCards) => [...prevCards, data]);
                alert('Card adicionado com sucesso!');
                return true; // Indica sucesso
            });
    };

    const updateCard = (id, updatedCard) => {
        return fetch(`http://localhost:3001/filmes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCard),
        })
            .then((response) => response.json())
            .then((data) => {
                setCards((prevCards) =>
                    prevCards.map((card) => (card.id === id ? data : card))
                );
                alert('Card atualizado com sucesso!');
                return true; // Indica sucesso
            });
    };

    const deleteCard = (id) => {
        return fetch(`http://localhost:3001/filmes/${id}`, { method: 'DELETE' })
            .then(() => {
                setCards((prevCards) => prevCards.filter((card) => card.id !== id));
                alert('Card deletado com sucesso!');
                return true; // Indica sucesso
            });
    };

    return (
        <CardContext.Provider value={{ cards, addCard, updateCard, deleteCard }}>
            {children}
        </CardContext.Provider>
    );
};
