const express = require("express");
const socket = require("socket.io");

// Server setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
    console.log("Made socket connection");
});