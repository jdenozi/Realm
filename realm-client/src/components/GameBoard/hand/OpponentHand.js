import React from "react";
import "../GameBoard.css";
import "../../../assets/css/style.css";
import "./Hand.css"



const OpponentHand = () => {

    return (
        <div className="opponent-hand">
            <div className="hand-card"></div>
            <div className="hand-card"></div>
            <div className="hand-card"></div>
            <div className="hand-card"></div>
            <div className="hand-card"></div>
            <div className="hand-card"></div>
        </div>
    );
};

export default OpponentHand;
