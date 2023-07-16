const mongoose = require("mongoose");

// const tokenSchema = new mongoose.Schema({
//     action: {
//         type: String,
//         required: true,
//     },
//     target: [String],
//     number: String,
//     from: [String],
//     to: [String],
//     temporality: String,
// });
//
// const cardSchema = new mongoose.Schema({
//     id: {
//         type: Number,
//         required: [true, "Card must have an ID"],
//     },
//     hash: {
//         type: Number,
//         required: [true, "Card must have a hash"],
//     },
//     name: {
//         type: String,
//         required: [true, "Card must have a title"],
//     },
//     type: {
//         type: String,
//         required: [true, "Card must have a type"],
//     },
//     description: {
//         type: String,
//         required: [true, "Card must have a description"],
//     },
//     quote: {
//         type: String,
//         default: "",
//     },
//     quoteAuthor: {
//         type: String,
//         default: "",
//     },
//     attack: {
//         type: Number,
//         default: 0,
//     },
//     defense: {
//         type: Number,
//         default: 0,
//     },
//     cost: {
//         type: Number,
//         required: [true, "Card must have a cost"],
//     },
//     image: {
//         type: String,
//     },
//     habitat: {
//         type: String,
//         default: "",
//     },
//     family: {
//         type: String,
//         default: "",
//     },
//     monsterCost: {
//         type: Number,
//         default: 0,
//     },
//     visionCost: {
//         type: Number,
//         default: 0,
//     },
//     equipmentCost: {
//         type: Number,
//         default: 0,
//     },
//     tokens: [tokenSchema],
// },
//     { collection: "cards" }
// );


const genericSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("GenericModel", genericSchema);

// module.exports = mongoose.model("Card", cardSchema);
