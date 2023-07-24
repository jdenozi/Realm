const Cards = require("../model/Card");
const path = require("path");

const cardRouter = async function (request, response) {
    if (request.url === "/cards" && request.method === "GET") {
        try {
            const cards = await Cards.find();
            // set the status code and content-type
            response.writeHead(200, { "Content-Type": "application/json" });
            // send the realm-db
            response.end(JSON.stringify(cards));
        } catch (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Internal Server Error");
        }
    } else if (request.url.startsWith("/cardsArtwork/") && request.method === "GET") {
        try {
            // Extract the image ID from the URL
            const imageId = path.basename(request.url);
            console.log(imageId);

            // Retrieve the card by ID
            const card = await Cards.findOne({ id: imageId });

            console.log(card);

            if (card && card.image) {
                // Set the Content-Type header based on the image file extension
                const ext = path.extname(card.image).slice(1);
                const contentType = `image/${ext}`;

                // send the image file
                const imagePath = path.join(__dirname, "../../realm-db/cards/", card.image);
                response.sendFile(imagePath);
            } else {
                response.writeHead(404, { "Content-Type": "text/plain" });
                response.end("Image not found");
            }
        } catch (error) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Internal Server Error");
        }
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Error");
    }
};

module.exports = cardRouter;
