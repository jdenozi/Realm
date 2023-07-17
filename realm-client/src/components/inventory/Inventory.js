import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import "./Inventory.css";
import "../../assets/css/style.css";

function Inventory() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/cards", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
                for (const card of data) {
                    console.log("Card name", card.name);
                    card.imageUrl = `http://localhost:8080/cardsArtwork/${card.id}`;
                }
                setCards([...data]);
            })
            .catch((error) => {
                console.error("Error fetching card data:", error);
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
                        imageUrl={card.imageUrl} // Pass the imageUrl as a prop to Card component
                    />
                ))}
            </div>
        </div>
    );
}

export default Inventory;
