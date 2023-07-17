import React, { useState } from 'react';
import './Menu.css';
const Menu = ({ handleButtonClick }) => {
    const [hoveredButton, setHoveredButton] = useState('');

    const handleButtonHover = (buttonId) => {
        setHoveredButton(buttonId);
    };

    const handleClick = (component) => {
        handleButtonClick(component);
    };

    const getTextContent = () => {
        switch (hoveredButton) {
            case 'play-game':
                return {
                    title: 'Play game',
                    description: 'Choose your game mode:',
                    buttons: [
                        { label: 'Offline', action: () => console.log('Offline button clicked') },
                        { label: 'Online', action: () => console.log('Online button clicked') },
                        { label: 'Search for Friends', action: () => console.log('Search for Friends button clicked') }
                    ]
                };
            case 'build':
                return {
                    title: 'Build',
                    description: 'Create and customize your deck.',
                    buttons: [{ label: 'Start Building', action: () => console.log('Start Building button clicked') }]
                };
            case 'card-inventory':
                return {
                    title: 'Card Inventory',
                    description: 'Manage your collection of cards.',
                    buttons: [{ label: 'View Inventory', action: () => console.log('View Inventory button clicked') }]
                };
            case 'settings':
                return {
                    title: 'Settings',
                    description: 'Customize game settings.',
                    buttons: [{ label: 'Open Settings', action: () => console.log('Open Settings button clicked') }]
                };
            default:
                return {
                    title: '',
                    description: '',
                    buttons: []
                };
        }
    };


    return (
        <div className="menu">
            <div id="menuContent" className="button-grid">
                <button
                    id="play-game"
                    className="m-button"
                    onMouseEnter={() => handleButtonHover('play-game')}
                    onMouseLeave={() => handleButtonHover('')}
                >
                    <p className="button-text">Play game</p>
                </button>

                <button
                    id="build"
                    className="m-button"
                    onMouseEnter={() => handleButtonHover('build')}
                    onMouseLeave={() => handleButtonHover('')}
                >
                    <p className="button-text">Build</p>
                </button>

                <button
                    id="card-inventory"
                    className="m-button hover"
                    onMouseEnter={() => handleButtonHover('card-inventory')}
                    onMouseLeave={() => handleButtonHover('')}
                    onClick={() => handleClick('Inventory')}
                >
                    <p className="button-text">Card inventory</p>
                </button>

                <button
                    id="settings"
                    className="m-button"
                    onMouseEnter={() => handleButtonHover('settings')}
                    onMouseLeave={() => handleButtonHover('')}
                >
                    <p className="button-text">Settings</p>
                </button>
            </div>

            <div className="content-container">
                <h2 className="content-title">{getTextContent().title}</h2>
                <p className="content-description">{getTextContent().description}</p>
                <div className="buttons-container">
                    {getTextContent().buttons.map((button, index) => (
                        <button key={index} className="menu-button" onClick={button.action}>
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Menu;
