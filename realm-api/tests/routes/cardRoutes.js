const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const Card = require("../model/Card");
const cardRouter = require("../path/to/cardRouter");
chai.use(chaiHttp);
const expect = chai.expect;
const mongoose = require("mongoose");
const Database = require("../../model/DataBase");
const {response} = require("express");

describe("cardRouter", () => {
    before(async () => {
        // Establish database connection
        try {
            const cardDb = new Database(databaseURI, "cards");
            cardDb.connect()
            console.log("Connected to the cards database");
        } catch (error) {
            console.error("Failed to connect to the test database:", error);
            console.error("The test can't continue" );
            throw error;
        }
    });

    after(async () => {
        // Close database connection
        await mongoose.disconnect();
        console.log("Disconnected from the cards database");
    });

    describe("GET /cards", () => {
        it("should return an array of cards with status code 200", async () => {
            console.log(response.data)
        });

    });
});
