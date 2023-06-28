const Card = require("../model/Card");

const router = async function (request, response){
    if (request.url === "api/cards/inventory" && request.method === "GET"){
        const cards = await Card.find();
        // set the status code, and content-type
        response.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        response.end(JSON.stringify(cards));
    }
}
module.exports = router;