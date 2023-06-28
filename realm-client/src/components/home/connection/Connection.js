import React from 'react';
import "./Connection.css"
import "../Home.css"


function Connection() {
    return (
        <div className="connection-form">
            <p class="inf-desc">Username</p>
            <input type="text" id="username" className="input-field" />

            <p className="inf-desc">Password</p>
            <input type="password" id="password" className="input-field" />
        </div>
    );
}

export default Connection;