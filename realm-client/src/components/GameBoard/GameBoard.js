import React, {useState} from "react";
import LeftPanel from "./leftPanel/LeftPanel";
import OpponentHand from "./hand/OpponentHand";
import UserHand from "./hand/UserHand";
import "./GameBoard.css";
import Table from "./table/Table";

function GameBoard() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="container">
            <LeftPanel hoveredCard={hoveredCard} />
            <div className="game-board">
                <OpponentHand />
                <Table />
                <UserHand setHoveredCard={setHoveredCard} />
            </div>
        </div>
    );
}

export default GameBoard;
