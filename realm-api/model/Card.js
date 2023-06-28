const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "Card must have an ID"],
    },
    hash: {
        type: Number,
        required: [true, "Card must have an hash"],
    },
    name: {
        type: String,
        required: [true, "Card must have a title"],
    },
    type: {
        type: String,
        required: [true, "Card must have a type"],
    },
    description: {
        type: String,
        required: [true, "Card must have a description"],
    },
    quote: {
        type: String,
    },
    quoteAuthor: {
        type: String,
    },
    attack: {
        type: Number,
    },
    defense: {
        type: Number,
    },
    cost: {
        type: Number,
        required: [true, "Card must have a cost"],
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model("Card", cardSchema);
