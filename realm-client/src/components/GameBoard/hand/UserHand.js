import React, { useEffect, useState } from "react";
import "../GameBoard.css";
import "../../../assets/css/style.css";
import "./Hand.css";

const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const REACT_APP_API_PORT = process.env.REACT_APP_API_PORT;

const UserHand = ({ setHoveredCard }) => {
    const additionalContent = (type, attack, defense) => {
        if (type === "ritual" || type === "invocation") {
            return (
                <div className="power">
                    {attack}/{defense}
                </div>
            );
        }
        return null;
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [cardsList, setCardsList] = useState([]);
    // const [setHoveredCard] = useState(null);


    useEffect(() => {
        const fetchCards = async () => {
            const cards = [];
            for (let i = 0; i < 6; i++) {
                const id = getRandomInt(48);
                try {
                    const response = await fetch(
                        `${REACT_APP_API_BASE_URL}:${REACT_APP_API_PORT}/card/${id}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                            },
                        }
                    );
                    const card = await response.json();
                    card.imageUrl = `${REACT_APP_API_BASE_URL}:${REACT_APP_API_PORT}/cardsArtwork/${card.image}`;
                    cards.push(card);
                } catch (error) {
                    console.error("Error fetching user card from realm-api:", error);
                }
            }
            setCardsList(cards);
        };

        fetchCards();
    }, []);

    return (
        <div className="user-hand">
            {cardsList.map((card) => (
                <div
                    className={`card ${card.type}`}
                    dataType={card.type}
                    key={card.id}
                    style={{
                        width: "var(--user-card-width)",
                        height: "var(--user-card-height)",
                        boxShadow: "inset 0 0 0 var(--hand-card-border-thickness) var(--card-border-color)",
                    }}
                    onMouseEnter={() => {console.log(card); setHoveredCard(card)}}
                    onMouseLeave={() => setHoveredCard(null)}
                >

                    <div className="overlay"></div>
                    <div className="bar bar-top">
                        <div
                            className="card-title"
                            style={{
                                fontSize: "var(--hand-card-title-font)",
                            }}
                        >
                            {card.name}
                        </div>
                        <div className="casting-cost">{card.manaCost}</div>
                    </div>
                    <div
                        className="card-image"
                        style={{ backgroundImage: `url(${card.imageUrl})` }}
                    ></div>
                    {additionalContent(card.type, card.attack, card.defense)}
                    <div className="footer">
                        <div className="author">Julien Denozi</div>
                        <div className="copyright"> - 2023 Realm</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserHand;
