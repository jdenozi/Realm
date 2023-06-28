import React from 'react';

import "../Home.css"
import "./Menu.css"

function Menu() {
    return (
        <div className="menu">
            <div id="menuContent" className="button-grid">

                <button id="open-direc" className="m-button">
                    <p className="button-text">Play game</p>
                </button>

                <button id="open-direc" className="m-button">
                    <p className="button-text">Build</p>
                </button>

            <button id="open-direc" className="m-button hover">
                <p className="button-text">Card inventory</p>
            </button>

            <button id="open-direc" className="m-button">
                <p className="button-text">Settings</p>
            </button>
            </div>

            <div>
                <p>TEXT</p>
            </div>

        </div>
    );
}

export default Menu;