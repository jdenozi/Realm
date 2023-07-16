const mongoose = require('mongoose');
require('dotenv').config();

const databaseURI = process.env.DATABASE_URI;
const databaseName = process.env.MONGO_INITDB_DATABASE;

const mongoose = require('mongoose');

class Database {
    constructor(databaseURI, databaseName) {
        this.databaseURI = databaseURI;
        this.databaseName = databaseName;
    }

    connect() {
        return mongoose.connect(this.databaseURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: this.databaseName,
        });
    }
}

module.exports = Database;
