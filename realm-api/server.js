require('dotenv').config({ path: '../.env' });
const express = require('express');
const Database = require('./model/DataBase');
const cardRouter = require('./routes/cardRoutes');
const path = require('path');
const PORT = process.env.PORT;
const cors = require('cors');

// Card database
const databaseURI = process.env.DATABASE_URI;
const databaseName = process.env.MONGO_INITDB_DATABASE;

const app = express();
const database = new Database(databaseURI, databaseName);

// Enable CORS for all routes
app.use(cors());
app.use('/cardsArtwork', express.static(path.join(__dirname, '../data/cards/img')));
app.use('/', cardRouter);

database.connect()
    .then(() => {
        console.log('> Connected to the cards database');
        app.listen(PORT, () => {
            console.log(`> Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('> Card database connection error:', error);
    });
