import "./Card.css"

import React, { useState, useEffect } from "react";

/**
 * @param {int} id The id of the card
 * @param {String} name The name of the card
 * @param {String} type The type of the card
 * @param {String} description The type of the card
 * @param {String} quote The quote of the card
 * @param {String} quoteAuthor The quote of the card
 * @param {int} attack The type of the card
 * @param {int} defense The type of the card
 * @param {int} cost The type of the card
 * @param {String} imageUrl The url of the image to display
 * @param {Boolean} foil The date
 */
function Card({id, name, type, description, quote, quoteAuthor, attack, defense, manaCost, imageUrl, foil}) {


    const additionalContent = (type) => {
        if(type === "ritual" || type === "invocation"){
            return (
                <div className="power">{attack}/{defense}</div>
            );
        }
    }

    // Use state to track the card type
    const [cardType, setCardType] = useState(type);

    // Use useEffect to update the card type when it changes
    useEffect(() => {
        setCardType(type);
    }, [type]);


    return (
        <div className={`card ${cardType}`} data-type={type}>
            <div className="overlay"></div>
            <div className="bar bar-top">
                <div className="card-title">{name}</div>
                <div className="casting-cost">{manaCost}</div>
            </div>
            <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="card-text">
                {description}
                <div className="card-quote">
                    "{quote}"
                    <br/>-{quoteAuthor}
                </div>
            </div>
            {additionalContent(type)}
            <div className="footer">
                <div className="author">Julien Denozi</div>
                <div className="copyright"> - 2023 Realm</div>
            </div>
        </div>
    );
}

export default Card;

