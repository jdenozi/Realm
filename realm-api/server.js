require('dotenv').config({ path: '../.env' });
const http = require('http');
const Database = require('./model/DataBase');
const cardRouter = require('./routes/cardRoutes');

const PORT = process.env.PORT

// Card database
const databaseURI = process.env.DATABASE_URI;
const databaseName = process.env.MONGO_INITDB_DATABASE;


const cardDb = new Database(databaseURI, "cards");
cardDb.connect()
    .then(() => {
        console.log('> Connected to the card database');
        const server = http.createServer((request, response) => {
            cardRouter(request, response).then(r => console.log("card router ok"));
        });

        server.listen(PORT, () => {
            console.log(`> Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('> Card database connection error:', error);
    });
