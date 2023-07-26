import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import "./Inventory.css";
import "../../assets/css/style.css";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_PORT = process.env.REACT_APP_API_PORT;

function Inventory() {
    const [cards, setCards] = useState([]);

    if(REACT_APP_API_BASE_URL === undefined || REACT_APP_API_PORT === undefined){
        throw new Error("Environment variable isn´t set");
    }

    useEffect(() => {
        fetch(`${REACT_APP_API_BASE_URL}:${REACT_APP_API_PORT}/cards`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
                for (const card of data) {
                    card.imageUrl =`${REACT_APP_API_BASE_URL}:${REACT_APP_API_PORT}/cardsArtwork/${card.image}`
                }
                setCards([...data]);
            })
            .catch((error) => {
                console.error("Error fetching card realm-db:", error);
            });
    }, []);

    return (
        <div className="container">
            <div className="card-grid">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        type={card.type}
                        description={card.description}
                        quote={card.quote}
                        quoteAuthor={card.quoteAuthor}
                        attack={card.attack}
                        defense={card.defense}
                        manaCost={card.manaCost}
                        foil={card.foil}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Inventory;
