const fs = require('fs');
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'realm-card-db';

// Collection Name
const collectionName = 'cards';

// Path to JSON file
const filePath = '/path/to/your/file.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    // Parse the JSON data
    const cardData = JSON.parse(data);

    // Connect to MongoDB
    MongoClient.connect(url, function(err, client) {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            return;
        }

        console.log('Connected successfully to MongoDB');

        // Get the database
        const db = client.db(dbName);

        // Get the collection
        const collection = db.collection(collectionName);

        // Insert the card data into the collection
        collection.insertMany(cardData, function(err, result) {
            if (err) {
                console.error('Error inserting card data:', err);
            } else {
                console.log('Card data inserted successfully');
            }

            // Close the MongoDB connection
            client.close();
        });
    });
});
