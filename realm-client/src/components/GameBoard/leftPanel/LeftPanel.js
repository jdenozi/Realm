import React from "react";
import "../GameBoard.css";
import "../../../assets/css/style.css";
import "./LeftPanel.css";
import Card from "../../cards/Card";

const LeftPanel = ({ hoveredCard }) => {
    return (
        <div className="left-panel">
            {hoveredCard &&
                <Card
                    id={hoveredCard.id}
                    name={hoveredCard.name}
                    type={hoveredCard.type}
                    description={hoveredCard.description}
                    quote={hoveredCard.quote}
                    quoteAuthor={hoveredCard.quoteAuthor}
                    attack={hoveredCard.attack}
                    defense={hoveredCard.defense}
                    manaCost={hoveredCard.manaCost}
                    imageUrl={hoveredCard.imageUrl}
                    foil={hoveredCard.foil}
                />
            }

            <div className="info-card">
                {hoveredCard && (
                    <>
                        <p className="card-info">Mana Cost: {hoveredCard.manaCost}</p>
                        <p className="card-info">Invocation Cost: {hoveredCard.invocationCost}</p>
                        <p className="card-info">Attack: {hoveredCard.attack}</p>
                        <p className="card-info">Defense: {hoveredCard.defense}</p>
                        <p className="card-info">Quote: "{hoveredCard.quote}"</p>
                        <p className="card-info">Quote Author: {hoveredCard.quoteAuthor}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default LeftPanel;
