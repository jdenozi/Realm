require('dotenv').config({path: '.env'});


const http = require("http");
const mongoose = require("mongoose");
const router = require("./routes/cardRoutes");

const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Server successfully connected to database");
});

const server = http.createServer((request, response) => {
    router(request, response);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});