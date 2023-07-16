const GenericModel = require("../model/Card");

const cardRouter = async function (request, response){
    if (request.url === "/cards" && request.method === "GET"){
        const cards = await GenericModel.find();
        // set the status code, and content-type
        response.writeHead(200, { "Content-Type": "application/cards" });
        // send the data
        response.end(JSON.stringify(cards));
    }
    else{
        response.writeHead(200, { "Content-Type": "application/cards" });
        response.end("Error");
    }
}
1 2 5 6 7
module.exports = cardRouter;
