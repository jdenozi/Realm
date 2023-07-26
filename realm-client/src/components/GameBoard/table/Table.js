import React, { useEffect, useState } from "react";
import "../GameBoard.css";
import "../../../assets/css/style.css";
import "./Table.css";

const generateRow = () => {
    const row = [];
    for (let i = 0; i < 6; i++) {
        row.push(<div key={i} className="playCard"></div>);
    }
    return <div key={Date.now()} className="row">{row}</div>;
};

const Table = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        // Generate rows when the component mounts
        const generatedRows = [];
        for (let i = 0; i < 4; i++) {
            generatedRows.push(generateRow());
        }
        setRows(generatedRows);

        // Clean up the generated rows when the component unmounts
        return () => {
            setRows([]);
        };
    }, []);

    return (
        <div className="table">
            <div className="field">{rows}</div>
        </div>
    );
};

export default Table;
