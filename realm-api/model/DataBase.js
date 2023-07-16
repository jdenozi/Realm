const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor(databaseURI, databaseName) {
        this.databaseURI = databaseURI;
        this.databaseName = databaseName;
        console.log("Database information", databaseURI, databaseName)
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
