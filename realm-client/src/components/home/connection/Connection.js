import React from 'react';
import "./Connection.css"
import "../Home.css"


function Connection() {
    return (
        <div>
            <h1 className="title">Realm</h1>
            <h2 className="subtitle">End of the era</h2>
            <div className="connection-form">
                <p className="inf-desc">Username</p>
                <input type="text" id="username" className="input-field" />

                <p className="inf-desc">Password</p>
                <input type="password" id="password" className="input-field" />
            </div>
        </div>

    );
}

export default Connection;